import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartialUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://fakestoreapi.com/users/';

  constructor(private http: HttpClient) { }

  actualizarUsuario(idUsuario: number, nombreUsuario: string, correo: string, contrasena: string) {
    let urlFinal = this.url+idUsuario;
    let body: PartialUser = {id: idUsuario, username: nombreUsuario, email: correo, password: contrasena};
    return this.http.put(urlFinal, body);
  }

  eliminarUsuario(idUsuario: number) {
    let urlFinal = this.url+idUsuario;
    return this.http.delete(urlFinal, {observe: 'response'});
  }
}
