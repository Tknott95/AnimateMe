import { Component, keyframes, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('signal', [    // Take out void tranisiton if you dont want this
       state('void', style({
        'transform': 'translateY(-100%)',
        'background-color': 'black'
      })),
      state('go', style({
        'background-color': 'green',
        'width': '20%'
      })),
      state('stop', style({
        'background-color': 'red',
        'width': '25%'
      })),
      transition('void <=> *', animate(1000, keyframes([
        style({'transform': 'scale(.4)'}), // medium
        style({'transform': 'scale(.9)'}), // fast
        style({'transform': 'scale(.5)'}) // slow
      ]))),
      transition('go <=> stop', animate('.5s 0s ease-in')) // ease-in is and can be a cubic-bezier(0,0,0,) 
    ]) // how long  delay   cubic-beziar/type
  ]
})
export class AppComponent {
  signal: string;
  isHere = false;
  onGoClick(){
    
    this.signal = 'go';
  }
  onStopClick(){
    this.signal = 'stop';
  }
  onToggleClick(){
    this.isHere = !this.isHere;
  }
}
