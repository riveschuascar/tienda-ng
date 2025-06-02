import { Component } from '@angular/core';
import { GreetingComponent } from '../../elements/greeting/greeting.component';


@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
