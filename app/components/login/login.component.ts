import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  async login() {
    try {
      await this.userService.login(this.email, this.password);
      this.router.navigate(['/listar']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      
    }
  }
}
