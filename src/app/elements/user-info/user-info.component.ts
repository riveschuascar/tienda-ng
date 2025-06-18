// src/app/elements/user-info/user-info.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../../services/usuario.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  userId!: number;
  userData?: User;
  errorMsg: string = '';

  constructor(private userService: UsuarioService) {}

  fetchUser() {
    if (!this.userId || this.userId <= 0) {
      this.errorMsg = 'Ingresa un ID válido.';
      this.userData = undefined;
      return;
    }

    this.userService.getUser(this.userId).subscribe({
      next: (res) => {
        this.userData = res;
        this.errorMsg = '';
      },
      error: (err) => {
        console.error('Error al obtener usuario:', err);
        this.errorMsg = 'No se encontró el usuario o hubo un error.';
        this.userData = undefined;
      }
    });
  }
}