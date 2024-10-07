import { Routes } from '@angular/router';
import { LibrosComponent } from './components/libros/libros.component';
import { GestionlibrosComponent } from './components/gestionlibros/gestionlibros.component';
import { RecomendadosComponent } from './components/recomendados/recomendados.component';
import { LoginComponent } from './components/login/login.component';
import { PrivadoGuard } from './guards/privado.guard';

export const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'listar', component: LibrosComponent, canActivate:[PrivadoGuard]},
  { path: 'crear', component: GestionlibrosComponent, canActivate:[PrivadoGuard]},
  { path: 'editar/:id', component: GestionlibrosComponent, canActivate:[PrivadoGuard]},
  { path: 'recomendados', component: RecomendadosComponent, canActivate:[PrivadoGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];
