import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrivadoGuard {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.user$.pipe(
      map(user => {
        
        if (user) {
          const isAdmin = user.email === 'admin@example.com';
          const isInvitado = user.email === 'invitado@example.com';

          if (isInvitado) {
            return true;
          }

          if (isAdmin && route.routeConfig?.path === 'recomendados') {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        }

        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
