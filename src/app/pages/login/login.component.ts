import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service'; // Importa el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login() {
    if (this.email && this.password) {
      this.usuarioService.login(this.email, this.password).subscribe({
        next: (user) => {
          alert('¡Login exitoso!');
     
          this.router.navigate(['/store']);
        },
        error: () => {
          alert('Credenciales incorrectas');
        }
      });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}