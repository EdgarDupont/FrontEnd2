import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  initialValue = [19, 19, 19];
  constructor() { }
  reset(){
    this.value = [0, 0, 0];
  }
  increment(position:number): number{
    this.initialValue[position]++;
    return this.initialValue[position];
  }
}
