import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartialUser, User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:3000/api/usuarios';
  urlLogin = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  addUser(usuario: User): Observable<User> {
    return this.http.post<User>(this.url, usuario);
  }

  actualizarUsuario(idUsuario: number, nombreUsuario: string, correo: string, contrasena: string) {
    let urlFinal = this.url + idUsuario;
    let body: PartialUser = { id: idUsuario, username: nombreUsuario, email: correo, password: contrasena };
    return this.http.put(urlFinal, body, { observe: 'response' });
  }

  eliminarUsuario(idUsuario: number) {
    let urlFinal = this.url + idUsuario;
    return this.http.delete(urlFinal, { observe: 'response' });
  }
login(email: string, password: string): Observable<User> {
  return this.http.post<User>(this.urlLogin, { email, password });
}
  
}
