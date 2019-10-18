import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counters';
  initialValue = 19;

  reset(){
    this.initialValue = 19;
  }
}
