import { Component } from '@angular/core';
import { StellarBody } from '../stellarbodies/stellarbody';
import { StellarBodyService } from '../stellarbodies/stellarbody.service';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent {
  public title = 'stop';

  constructor(private stellarBodyService: StellarBodyService) {}

  private receiveStellarBody(stellarBody: StellarBody) {
    this.stellarBodyService.sendStop(stellarBody);
  }
}
