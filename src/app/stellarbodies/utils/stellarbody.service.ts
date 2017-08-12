import { any } from 'codelyzer/util/function';
import { Observable, Subject } from 'rxjs/Rx';
import { STELLAR_BODIES } from './mock-stellarbodies';
import { Injectable } from '@angular/core';
import { StellarBody } from './stellarbody';

@Injectable()
export class StellarBodyService {
    private start = new Subject<StellarBody>();
    private startOrbit = new Subject<number>();
    private stop = new Subject<StellarBody>();
    private stopOrbit = new Subject<number>();
    private distance = new Subject<number>();
    private jump = new Subject<boolean>();

    public getStellarBodies(): Promise<StellarBody[]> {
        return Promise.resolve(STELLAR_BODIES);
    }

    public getStellarBodyById(sid: number): Promise<StellarBody> {
        return Promise.resolve(STELLAR_BODIES.find(myObj => myObj.id === sid));
    }

    public getStellarBodyByName(name: string): Promise<StellarBody> {
        return Promise.resolve(STELLAR_BODIES.find(myObj => myObj.name === name));
    }

    public sendStart(stellarBody: StellarBody) {
        this.start.next(stellarBody);
    }

    public getStart(): Observable<StellarBody> {
        return this.start.asObservable();
    }

    public sendStartOrbit(orbit: number) {
        this.startOrbit.next(orbit);
    }

    public getStartOrbit(): Observable<number> {
        return this.startOrbit.asObservable();
    }

    public sendStop(stellarBody: StellarBody) {
        this.stop.next(stellarBody);
    }

    public getStop(): Observable<StellarBody> {
        return this.stop.asObservable();
    }

    public sendStopOrbit(orbit: number) {
        this.stopOrbit.next(orbit);
    }

    public getStopOrbit(): Observable<number> {
        return this.stopOrbit.asObservable();
    }

    public sendDistance(distance: number) {
        this.distance.next(distance);
    }

    public getDistance(): Observable<number> {
        return this.distance.asObservable();
    }

    public sendJump(jump: boolean) {
        this.jump.next(jump);
    }

    public getJump(): Observable<boolean> {
        return this.jump.asObservable();
    }
}
