// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number;
  email: string;
  username: string;
  password?: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  getUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  addUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }
}
