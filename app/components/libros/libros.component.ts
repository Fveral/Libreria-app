import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LibroserviceService } from '../../services/libroservice.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {
  libros: any[] = [];

  constructor(private libroService: LibroserviceService) { }

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros() {
    this.libroService.obtenerLibros().subscribe(data => {
      console.log('Libros:', data); // Asegúrate de que cada libro tiene un id
      this.libros = data;
    });
  }

  deleteLibro(id: string) {
    this.libroService.eliminarLibroService(id).then(() => {
      this.getLibros();
    }).catch(error => {
      console.error('Error eliminando el libro: ', error);
    });
  }
}
