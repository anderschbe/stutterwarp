import { Component } from '@angular/core';
import { StellarBody } from '../../stellarbodies/utils/stellarbody';
import { StellarBodyService } from '../../stellarbodies/utils/stellarbody.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
})
export class StartComponent {
  public title = 'start';

  constructor(private stellarBodyService: StellarBodyService) {}

  private receiveStellarBody(stellarBody: StellarBody) {
    this.stellarBodyService.sendStart(stellarBody);
  }

  private receiveOrbit(orbit: number) {
    this.stellarBodyService.sendStartOrbit(orbit);
  }
}
