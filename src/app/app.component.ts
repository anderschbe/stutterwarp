import { Component, OnInit } from '@angular/core';

import { StellarBody } from './stellarbodies/stellarbody';
import { StellarBodyService } from './stellarbodies/stellarbody.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'stutterwarp calculator';
}
