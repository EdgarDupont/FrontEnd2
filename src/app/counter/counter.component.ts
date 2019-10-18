import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  title = "Compteur 1"

  @Input() value;

  constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

  increment(){
    this.value ++
  } 

}
