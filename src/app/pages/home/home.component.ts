import { Component } from '@angular/core';
import { GreetingComponent } from '../../elements/greeting/greeting.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],   //, GreetingComponent
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }



