import { STELLAR_BODIES } from './mock-stellarbodies';
import { Injectable } from '@angular/core';
import { StellarBody } from './stellarbody';

@Injectable()
export class StellarBodyService {
    getStellarBodies(): Promise<StellarBody[]> {
        return Promise.resolve(STELLAR_BODIES);
    }

    getStellarBody(sid: number): Promise<StellarBody> {
        return Promise.resolve(STELLAR_BODIES.find(myObj => myObj.id === sid));
    }
}
