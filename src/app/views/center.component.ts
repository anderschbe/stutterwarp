import { Subscription } from 'rxjs/Rx';
import { StellarBody } from '../stellarbodies/stellarbody';
import { Component, OnDestroy } from '@angular/core';
import { StellarBodyService } from '../stellarbodies/stellarbody.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnDestroy {

  public title = 'Stutterwarp Calculator';
  public start: StellarBody;
  public stop: StellarBody;
  private startSubscription: Subscription;
  private stopSubscription: Subscription;
  public gravs: number[] = [];

  constructor(private stellarBodyService: StellarBodyService) {
    this.startSubscription = this.stellarBodyService.getStart().subscribe(obj => {
      this.start = obj;
      this.getGrav(obj);
    });
    this.stopSubscription = this.stellarBodyService.getStop().subscribe(obj => {
      this.stop = obj;
    });
  }

  public ngOnDestroy(): void {
    this.startSubscription.unsubscribe();
    this.startSubscription.unsubscribe();
  }

  private async getGrav(stellarBody: StellarBody) {
    this.gravs = [];
    let radius = stellarBody.radius;
    while (stellarBody.id !== 1) {
      const tempRadius = stellarBody.parentDistance;
      stellarBody = await this.calcGrav(stellarBody, radius);
      radius = tempRadius;
    }
    await this.calcGrav(stellarBody, radius);
  }

  private calcGrav(stellarBody: StellarBody, radius: number): Promise<StellarBody> {
      this.gravs.push(environment.conG * stellarBody.mass / radius ** 2);
      return this.stellarBodyService.getStellarBody(stellarBody.parent);
  }
}
