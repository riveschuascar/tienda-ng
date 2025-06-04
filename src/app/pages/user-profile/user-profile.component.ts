import { Component, inject, Input } from '@angular/core';
import { PartialUser } from '../../interfaces/user';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/UserService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [ CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  route = inject(ActivatedRoute);
  servicioUsuarios1: UsuarioService = inject(UsuarioService);
  servicioUsuarios2: UserService = inject(UserService);

  @Input() nombreUsuario: string = '';
  @Input() correo: string = '';
  @Input() contrasena: string = '';

  usuario!: PartialUser;
  mostrarContrasena: boolean = false;

  constructor(private router: Router) {
    const idUsuario = Number(this.route.snapshot.params['id']);
    this.servicioUsuarios2.getUser(idUsuario).subscribe({
      next: (value) => {
        this.usuario = value;
        this.nombreUsuario = `${value.name.firstname} ${value.name.lastname}`;
        this.correo = value.email;
        this.contrasena = value.password;
      },
      error: (error) => console.log(error),
      complete: () => console.log(this.usuario)
    });
  }

  actualizarDatosUsuario(idUsuario: number, nombreUsuario: string, correo: string, contrasena: string) {
    this.servicioUsuarios1.actualizarUsuario(idUsuario, nombreUsuario, correo, contrasena).subscribe({
      next: (respuesta) => {
        switch (respuesta.status) {
          case 200:
            alert('Datos actualizados correctamente')
            break;
          case 400:
            alert('Error al mandar la solicitud a la API')
            break;
          default:
            alert('Sucedio un error inesperado')
            break;
        }
      },
      error: (e) => console.log(e),
      complete: () => console.log("Operacion terminada")
    })
  }

  eliminarUsuario(idUsuario: number) {
    this.servicioUsuarios1.eliminarUsuario(idUsuario).subscribe({
      next: (respuesta) => {
        if (respuesta.status == 200) {
          console.log("Usuario eliminado correctamente");
          alert('Usuario eliminado correctamente, redirigiendo a pagina de inicio')
          this.router.navigate(['/']);
        } else {
          console.log("Se produjo un error por lado del servidor");
        }
      },
      error: (e) => console.log(e)
    })
  }
}
