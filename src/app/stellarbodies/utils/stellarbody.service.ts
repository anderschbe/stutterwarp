import { any } from 'codelyzer/util/function';
import { Observable, Subject } from 'rxjs/Rx';
import { STELLAR_BODIES } from './mock-stellarbodies';
import { Injectable } from '@angular/core';
import { StellarBody } from './stellarbody';

@Injectable()
export class StellarBodyService {
    private start = new Subject<StellarBody>();
    private stop = new Subject<StellarBody>();

    public getStellarBodies(): Promise<StellarBody[]> {
        return Promise.resolve(STELLAR_BODIES);
    }

    public getStellarBody(sid: number): Promise<StellarBody> {
        return Promise.resolve(STELLAR_BODIES.find(myObj => myObj.id === sid));
    }

    public sendStart(stellarBody: StellarBody) {
        this.start.next(stellarBody);
    }

    public getStart(): Observable<StellarBody> {
        return this.start.asObservable();
    }

    public sendStop(stellarBody: StellarBody) {
        this.stop.next(stellarBody);
    }

    public getStop(): Observable<StellarBody> {
        return this.stop.asObservable();
    }
}
