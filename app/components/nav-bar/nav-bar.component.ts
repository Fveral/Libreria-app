import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private userService: UserService, private router: Router) {}


  logout() {
    this.userService.logout().then(() => {
      console.log('Sesión finalizada'); // Puedes mostrar un mensaje aquí si lo deseas
      this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }
}
