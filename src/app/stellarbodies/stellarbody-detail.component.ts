import { Component, Input, OnChanges } from '@angular/core';

import { StellarBody } from './stellarbody';
import { StellarBodyService } from './stellarbody.service';

@Component({
    selector: 'app-stellarbody-detail',
    templateUrl: './stellarbody-detail.component.html',
})
export class StellarBodyDetailComponent implements OnChanges {
    stellarBodyParent: StellarBody;
    @Input() stellarBody: StellarBody;

    constructor(private stellarBodyService: StellarBodyService) {
    }

    ngOnChanges(): void {
        this.stellarBodyService.getStellarBody(this.stellarBody.parent).then(stellarBodies => this.stellarBodyParent = stellarBodies);
    }
}
