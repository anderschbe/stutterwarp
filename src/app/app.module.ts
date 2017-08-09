import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CenterComponent } from './data/center/center.component';
import { DataComponent } from './data/data.component';
import { StartComponent } from './data/start/start.component';
import { StopComponent } from './data/stop/stop.component';
import { StellarBodyDetailComponent } from './stellarbodies/details/stellarbody-detail.component';
import { StellarBodiesComponent } from './stellarbodies/stellarbodies.component';
import { StellarBodyService } from './stellarbodies/utils/stellarbody.service';
import { VisualizationComponent } from './visualization/visualization.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterComponent,
    DataComponent,
    StartComponent,
    StellarBodiesComponent,
    StellarBodyDetailComponent,
    StopComponent,
    VisualizationComponent
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
