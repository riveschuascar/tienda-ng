import { Component, inject, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  servicioUsuarios: UsuarioService = inject(UsuarioService);
  @Input() nombreUsuario: string = '';
  @Input() correo: string = '';
  @Input() contrasena: string = '';
  usuario!: User;

  actualizarDatosUsuario(idUsuario: number, nombreUsuario: string, correo: string, contrasena: string) {
    this.servicioUsuarios.actualizarUsuario(idUsuario, nombreUsuario, correo, contrasena).subscribe({
      next: (respuesta) => console.log(respuesta),
      error: (e) => console.log(e),
      complete: () => console.log("Operacion terminada")
    })
  }

  eliminarUsuario(idUsuario: number) {
    this.servicioUsuarios.eliminarUsuario(idUsuario).subscribe({
      next: (respuesta) => console.log(respuesta),
      error: (e) => console.log(e),
      complete: () => console.log("Operacion terminada")
    })
  }
}
