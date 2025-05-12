import { Component } from '@angular/core';
import { GreetingComponent } from '../../elements/greeting/greeting.component';
import { RedcircleComponent } from '../../elements/redcircle/redcircle.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, RedcircleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
