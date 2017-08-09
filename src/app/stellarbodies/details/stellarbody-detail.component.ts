import { Component, Input } from '@angular/core';

import { StellarBody } from '../utils/stellarbody';

@Component({
    selector: 'app-stellarbody-detail',
    templateUrl: './stellarbody-detail.component.html',
})
export class StellarBodyDetailComponent {
    @Input() public stellarBody: StellarBody;
    @Input() public ParentName: string;
}
