import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { StellarBody } from './utils/stellarbody';
import { StellarBodyService } from './utils/stellarbody.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-stellarbodies',
  templateUrl: './stellarbodies.component.html',
  styleUrls: ['./stellarbodies.component.scss']
})
export class StellarBodiesComponent implements OnInit {
  @Output() public eventStellarBody: EventEmitter<StellarBody> = new EventEmitter();
  // @Output() public eventOrbit: EventEmitter<string> = new EventEmitter();
  public stellarBodies: StellarBody[];
  public selectedStellarBody: StellarBody;
  public selectedStellarBodyParentName: string;
  public model: string;
  public searchText = (text$: Observable<string>) =>
    text$
      .debounceTime(100)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.stellarBodies.map(v => v.name).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  constructor(private stellarBodyService: StellarBodyService) {}

  private getStellarBodies(): void {
    this.stellarBodyService.getStellarBodies().then(obj => this.stellarBodies = obj);
  }

  public async selectStellarBody(event: any) {
    this.selectedStellarBody = await this.stellarBodyService.getStellarBodyByName(event.item);
    this.eventStellarBody.next(this.selectedStellarBody);
    this.selectedStellarBodyParentName = (await this.stellarBodyService.getStellarBodyById(this.selectedStellarBody.parent)).name;
  }

  public ngOnInit(): void {
    this.getStellarBodies();
  }
}
