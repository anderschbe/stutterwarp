import { Component } from '@angular/core';
import { StellarBody } from '../../stellarbodies/utils/stellarbody';
import { StellarBodyService } from '../../stellarbodies/utils/stellarbody.service';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
})
export class StopComponent {
  public title = 'stop';

  constructor(private stellarBodyService: StellarBodyService) {}

  private receiveStellarBody(stellarBody: StellarBody) {
    this.stellarBodyService.sendStop(stellarBody);
  }

  private receiveOrbit(orbit: number) {
    this.stellarBodyService.sendStopOrbit(orbit);
  }
}
