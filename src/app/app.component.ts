import { Component, OnInit } from '@angular/core';

import { StellarBody } from './stellarbodies/utils/stellarbody';
import { StellarBodyService } from './stellarbodies/utils/stellarbody.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'stutterwarp calculator';
}
