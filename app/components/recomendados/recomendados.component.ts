import { Component } from '@angular/core';
import { LibroserviceService } from '../../services/libroservice.service';

@Component({
  selector: 'app-recomendados',
  standalone: true,
  imports: [],
  templateUrl: './recomendados.component.html',
  styleUrl: './recomendados.component.css'
})
export class RecomendadosComponent {
  librosR: any[] = []; 

  constructor(private libroService: LibroserviceService) {}

  ngOnInit(): void {
    this.libroService.obtenerLibrosRecomendados()
      .subscribe((data) => {
        this.librosR = data;
      });
  }
}
