import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: Observable<any>;

  constructor(private auth: Auth) {
    this.user$ = authState(this.auth);
  }

  async login(email: string, password: string): Promise<any> {
    if (email === 'admin@example.com' && password === 'administrador') {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } else if (email === 'invitado@example.com' && password === 'invitado') {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } else {
      throw new Error('Credenciales incorrectas');
    }
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  isAuthenticated(): Observable<boolean> {
    return new Observable((observer) => {
      this.user$.subscribe(user => {
        observer.next(!!user); 
      });
    });
  }

}
