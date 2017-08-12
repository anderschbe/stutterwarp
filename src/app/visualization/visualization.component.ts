import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

import { Gravector } from '../stellarbodies/utils/gravector';
import { StellarBody } from '../stellarbodies/utils/stellarbody';
import { StellarBodyService } from '../stellarbodies/utils/stellarbody.service';
import { Jump } from '../stellarbodies/utils/jump';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnDestroy {
  public title = 'Stutterwarp Calculator';
  public start: StellarBody;
  public stop: StellarBody;

  private startOrbit: number;
  private stopOrbit: number;
  private startSubscription: Subscription;
  private stopSubscription: Subscription;
  private startOrbitSubscription: Subscription;
  private stopOrbitSubscription: Subscription;
  private distanceSubscription: Subscription;
  private jumpSubscription: Subscription;

  public distanceStartStop: number;
  public currentDistance: number;
  public jumps: Jump[];
  public gravectors: Gravector[];
  public currentJump: number;

  public efficiency = 50000;
  private stepping: string;

  constructor(private stellarBodyService: StellarBodyService) {
    this.startSubscription = this.stellarBodyService.getStart().subscribe(obj => {
      this.start = obj;
      this.canInitialize();
    });
    this.stopSubscription = this.stellarBodyService.getStop().subscribe(obj => {
      this.stop = obj;
      this.canInitialize();
    });
    this.startOrbitSubscription = this.stellarBodyService.getStartOrbit().subscribe(obj => {
      this.startOrbit = obj;
      this.canInitialize();
    });
    this.stopOrbitSubscription = this.stellarBodyService.getStopOrbit().subscribe(obj => {
      this.stopOrbit = obj;
      this.canInitialize();
    });
    this.distanceSubscription = this.stellarBodyService.getDistance().subscribe(obj => {
      this.distanceStartStop = obj;
      this.canInitialize();
    });
    this.jumpSubscription = this.stellarBodyService.getJump().subscribe(obj => {
      if (this.jumps !== undefined) {
        this.stepping = obj;
        if (obj === 'continuous') {
          this.continuousJump();
        } else if (obj === 'once') {
          this.jump();
        }
      }
    });
  }

  private canInitialize() {
    if (this.start !== undefined && this.stop !== undefined && this.distanceStartStop !== undefined) {
      this.initData();
    }
  }

  private async initData() {
    this.startOrbit = (this.startOrbit === undefined) ? 0 : this.startOrbit;
    this.stopOrbit = (this.stopOrbit === undefined) ? 0 : this.stopOrbit;
    this.currentDistance = 0;
    this.jumps = [];
    this.jump();
  }

    private async calcGravectors() {
    this.gravectors = [];
    let stellarBody = this.start;
    let distance = stellarBody.radius + this.startOrbit + this.currentDistance;
    while (stellarBody.id !== 0) { // all parents except Universe
      const tempDistance = stellarBody.parentDistance;
      stellarBody = await this.calcGravector(stellarBody, distance);
      distance = tempDistance;
    }
    await this.calcGravector(stellarBody, distance); // Universe
    await this.calcGravector(this.stop, this.distanceStartStop - this.currentDistance); // stop.stellarBody
  }

  private calcGravector(stellarBody: StellarBody, distance: number): Promise<StellarBody> {
      this.gravectors.push(new Gravector(stellarBody.id, stellarBody.radius, environment.conG * stellarBody.mass / distance ** 2));
      return this.stellarBodyService.getStellarBodyById(stellarBody.parent);
  }

  private maxGrav(arrGrav: Gravector[]): number {
    return arrGrav.sort((a , b) => (a.grav < b.grav) ? 1 : -1)[0].grav;
  }

  private async jump() {
    await this.calcGravectors();
    this.calcJump();
  }

  private async continuousJump() {
    while (this.stepping !== 'stop' && this.distanceStartStop - this.currentDistance - this.stop.radius - this.stopOrbit > 0) {
      await this.calcGravectors();
      await this.calcJump();
    }
  }

  private async calcJump() {
    const result = new Jump(this.gravectors, this.efficiency / this.maxGrav(this.gravectors) ** 0.5, this.efficiency);
    this.jumps.push(result);
    this.currentDistance += result.range;
  }

  public ngOnDestroy(): void {
    this.startSubscription.unsubscribe();
    this.startSubscription.unsubscribe();
    this.startOrbitSubscription.unsubscribe();
    this.stopOrbitSubscription.unsubscribe();
    this.distanceSubscription.unsubscribe();
    this.jumpSubscription.unsubscribe();
  }
}
