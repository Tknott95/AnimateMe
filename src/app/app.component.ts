import { Component, trigger, state, style } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('signal', [
      state('go', style({
        'background-color':'green'
      }))
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
}
