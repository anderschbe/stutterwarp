import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CenterComponent } from './views/center.component';
import { StartComponent } from './views/start.component';
import { StellarBodyDetailComponent } from './stellarbodies/stellarbody-detail.component';
import { StellarBodiesComponent } from './stellarbodies/stellarbodies.component';
import { StellarBodyService } from './stellarbodies/stellarbody.service';
import { StopComponent } from './views/stop.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterComponent,
    StartComponent,
    StellarBodiesComponent,
    StellarBodyDetailComponent,
    StopComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [StellarBodyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
