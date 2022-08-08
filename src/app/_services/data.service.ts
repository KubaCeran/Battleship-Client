import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Coordinate } from '../models/coordinate';
import { Result } from '../models/result';



@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      
    }

  getNewBoardForPlayer1() {
     return this.http.get<Result>('https://localhost:7187/api/Game/1');
  }

  getNewBoardForPlayer2() {
     return this.http.get<Result>('https://localhost:7187/api/Game/2');
  }

  movePlayer1() {
    return this.http.get<Result>('https://localhost:7187/api/Game/move/1');
  }

  movePlayer2() {
    return this.http.get<Result>('https://localhost:7187/api/Game/move/2');
  }

  resetGame() {
    return this.http.get('https://localhost:7187/api/Game/reset');
  }

  

  convertArray(coordinate: Coordinate[]) {
      var size = 10; var arrayOfArrays = [];
      for (var i = 0; i < 100; i += size) {
        arrayOfArrays.push(coordinate.slice(i, i + size));
    }
    console.log(arrayOfArrays);
    return arrayOfArrays;
  }
}
