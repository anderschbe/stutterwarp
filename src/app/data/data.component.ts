import { Component } from '@angular/core';
import { StellarBodyService } from '../stellarbodies/utils/stellarbody.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

  constructor(private stellarBodyService: StellarBodyService) {}

  private receiveDistance(distance: number) {
    this.stellarBodyService.sendDistance(distance);
  }
}
