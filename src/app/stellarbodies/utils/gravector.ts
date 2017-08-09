export class Gravector {
  public id: number;
  public distance: number;
  public grav: number;

  constructor(id: number, distance: number, grav: number) {
    this.id = id;
    this.distance = distance;
    this.grav = grav;
  }
}
