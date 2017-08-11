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
  public grav: number;

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
  public distanceStartStop: number;
  public currentDistance: number;
  public range: number;
  public gravectors: Gravector[];
  public jumps: Jump[] = [];
  private initiate = false;

  constructor(private stellarBodyService: StellarBodyService) {
    this.startSubscription = this.stellarBodyService.getStart().subscribe(obj => {
      this.start = obj;
      if (this.stop !== undefined) {
        this.initData();
     }
    });
    this.stopSubscription = this.stellarBodyService.getStop().subscribe(obj => {
      this.stop = obj;
      if (this.start !== undefined) {
        this.initData();
      }
    });
    this.startOrbitSubscription = this.stellarBodyService.getStartOrbit().subscribe(obj => {
      this.startOrbit = obj;
      if (this.stop !== undefined && this.start !== undefined) {
        this.initData();
     }
    });
    this.stopOrbitSubscription = this.stellarBodyService.getStopOrbit().subscribe(obj => {
      this.stopOrbit = obj;
      if (this.stop !== undefined && this.start !== undefined) {
        this.initData();
     }
    });
    this.distanceSubscription = this.stellarBodyService.getDistance().subscribe(obj => {
      this.distanceStartStop = obj;
      this.initData();
    });
  }

  public ngOnDestroy(): void {
    this.startSubscription.unsubscribe();
    this.startSubscription.unsubscribe();
    this.startOrbitSubscription.unsubscribe();
    this.stopOrbitSubscription.unsubscribe();
    this.distanceSubscription.unsubscribe();
  }

  private async initData() {
    this.startOrbit = (this.startOrbit === undefined) ? 0 : this.startOrbit;
    this.stopOrbit = (this.stopOrbit === undefined) ? 0 : this.stopOrbit;
    this.distanceStartStop = (this.distanceStartStop === undefined) ? 1E+17 : this.distanceStartStop;

    this.gravectors = [];
    this.jumps = [];
    let stellarBody = this.start;
    let distance = stellarBody.radius + this.startOrbit;
    while (stellarBody.id !== 0) { // all parents except Universe
      const tempDistance = stellarBody.parentDistance;
      stellarBody = await this.calcGravector(stellarBody, distance);
      distance = tempDistance;
    }
    await this.calcGravector(stellarBody, distance); // Universe
    await this.calcGravector(this.stop, this.distanceStartStop); // stop.stellarBody
    this.grav = this.maxGrav(this.gravectors);
    this.range = this.calcJump(this.gravectors, 1);
  }

  private maxGrav(arrGrav: Gravector[]): number {
    return this.gravectors.sort((a , b) => (a.grav < b.grav) ? 1 : -1)[0].grav;
  }

  private calcGravector(stellarBody: StellarBody, distance: number): Promise<StellarBody> {
      this.gravectors.push(new Gravector(stellarBody.id, stellarBody.radius, environment.conG * stellarBody.mass / distance ** 2));
      return this.stellarBodyService.getStellarBodyById(stellarBody.parent);
  }

  private calcJump(gravector: Gravector[], efficiency: number): number {
    const result = new Jump(gravector, efficiency / this.maxGrav(gravector) ** 0.5, efficiency);
    this.jumps.push(result);
    return result.range;
  }

  private continuousJump() {
    while (this.currentDistance > 0) {

    }
  }
}
