import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
})
export class CenterComponent {
  @Output() public eventDistance: EventEmitter<number> = new EventEmitter();
  @Output() public eventJump: EventEmitter<boolean> = new EventEmitter();

  public title = 'Stutterwarp Calculator';
  public distance: number;

  public onEnter() {
    this.eventDistance.next(Number(this.distance));
  }

  public oneJump() {
    this.eventJump.next(Boolean(true));
  }
}
