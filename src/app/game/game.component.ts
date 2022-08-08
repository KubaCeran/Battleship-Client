import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Coordinate } from '../models/coordinate';
import { Result } from '../models/result';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{

  convertedCoordinatesP1;
  convertedCoordinatesP2;
  isP1Winner: boolean;
  isP2Winner: boolean;

  constructor(private dataService: DataService) { }

  onStart() {
    this.convertedCoordinatesP1 = [];
    this.convertedCoordinatesP2 = [];
    this.isP1Winner = false;
    this.isP2Winner = false;

    this.dataService.getNewBoardForPlayer1().subscribe((response: Result) => {
      console.log(response)
      this.convertedCoordinatesP1 = this.convertArray(response.coordinates);
    });

    this.dataService.getNewBoardForPlayer2().subscribe((response: Result) => {
      console.log(response)
      this.convertedCoordinatesP2 = this.convertArray(response.coordinates);
    });
  }

  onMove() {
    this.convertedCoordinatesP1 = [];
    this.convertedCoordinatesP2 = [];
    this.isP1Winner = false;
    this.isP2Winner = false;


    this.dataService.movePlayer1().subscribe((response: Result) => {
      console.log(response)
      this.convertedCoordinatesP2 = this.convertArray(response.coordinates);
      this.isP1Winner = response.isP1Winner;
    });

    this.dataService.movePlayer2().subscribe((response: Result) => {
      console.log(response)
      this.convertedCoordinatesP1 = this.convertArray(response.coordinates);
      this.isP2Winner = response.isP2Winner;
    });
  }

  onReset() {
    this.dataService.resetGame().subscribe();
    this.onStart();
  }

  Log() {
    console.log(this.convertedCoordinatesP1);
    console.log(this.convertedCoordinatesP2);
  }


  ngOnInit(): void{
    this.onReset();
  }

  convertArray(coordinate: Coordinate[]) {
    var size = 10; var arrayOfArrays = [];
    for (var i = 0; i < 100; i += size) {
      arrayOfArrays.push(coordinate.slice(i, i + size));
    }
    return arrayOfArrays;
  }

}
