import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, Usuario } from '../../services/UserService';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => this.usuarios = data,
      error: () => alert('Error al cargar usuarios')
    });
  }
}
