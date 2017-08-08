import { Component } from '@angular/core';
import { StellarBodyService } from '../stellarbodies/stellarbody.service';
import { StellarBody } from '../stellarbodies/stellarbody';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  public title = 'start';

  constructor(private stellarBodyService: StellarBodyService) {}

  private receiveStellarBody(stellarBody: StellarBody) {
    this.stellarBodyService.sendStart(stellarBody);
  }
}
