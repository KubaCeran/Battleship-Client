import { Coordinate } from "./coordinate";

export interface Result{
  coordinates: Coordinate[];
  isP1Winner: boolean;
  isP2Winner: boolean;
  player: number
}
