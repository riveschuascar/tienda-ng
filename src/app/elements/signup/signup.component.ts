// src/app/elements/signup/signup.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/UserService';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  user: User = {
    id: 0,
    email: '',
    username: '',
    password: '',
    name: {firstname: '', lastname: ''}
  }

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.addUser(this.user).subscribe({
      next: (res) => {
        console.log('Usuario creado:', res);
        alert(`Usuario creado con ID ${res.id}`);
      },
      error: (err) => {
        console.error('Error al crear usuario:', err);
        alert('Error al crear usuario. Revisa la consola.');
      }
    });
  }
}
