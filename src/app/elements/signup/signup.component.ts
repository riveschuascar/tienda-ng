// src/app/elements/signup/signup.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService, Usuario } from '../../services/UserService';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user: Usuario = {
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: ''
    },
    phone: ''
  };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.addUser(this.user).subscribe({
      next: (res) => {
        console.log('Usuario creado:', res);
        alert(`Usuario creado con ID ${res.id}`);
        this.user = {
          email: '',
          username: '',
          password: '',
          name: { firstname: '', lastname: '' },
          phone: ''
        };
      },
      error: (err) => {
        console.error('Error al crear usuario:', err);
        alert('Error al crear usuario. Revisa la consola.');
      }
    });
  }
}
