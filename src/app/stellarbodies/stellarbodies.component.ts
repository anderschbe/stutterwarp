import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { StellarBody } from './utils/stellarbody';
import { StellarBodyService } from './utils/stellarbody.service';

@Component({
  selector: 'app-stellarbodies',
  templateUrl: './stellarbodies.component.html',
  styleUrls: ['./stellarbodies.component.scss']
})
export class StellarBodiesComponent implements OnInit {
  @Output() public eventStellarBody: EventEmitter<StellarBody> = new EventEmitter();
  public stellarBodies: StellarBody[];
  public selectedStellarBody: StellarBody;
  public selectedStellarBodyParentName: string;

  constructor(private stellarBodyService: StellarBodyService) {}

  private getStellarBodies(): void {
    this.stellarBodyService.getStellarBodies().then(obj => this.stellarBodies = obj);
  }

  private async selectStellarBody() {
    this.eventStellarBody.next(this.selectedStellarBody);
    this.selectedStellarBodyParentName = (await this.stellarBodyService.getStellarBody(this.selectedStellarBody.parent)).name;
  }

  public ngOnInit(): void {
    this.getStellarBodies();
  }
}
