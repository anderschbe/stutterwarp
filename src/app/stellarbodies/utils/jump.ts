import { Gravector } from './gravector';

export class Jump {
  public gravectors: Gravector[];
  public range: number;
  public efficiency: number;

  constructor(gravectors: Gravector[], range: number, efficiency: number) {
    this.gravectors = gravectors;
    this.range = range;
    this.efficiency = efficiency;
  }
}
