import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('signal', [
      state('go', style({
        'background-color': 'green'
      })),
      state('stop', style({
        'background-color': 'red'
      })),
      transition('* => *', animate(500))
    ])
  ]
})
export class AppComponent {
  signal = 'stop';

  onGoClick(){
    this.signal = 'go';
  }
  onStopClick(){
    this.signal = 'stop';
  }
}
