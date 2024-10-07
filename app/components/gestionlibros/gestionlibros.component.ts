import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { LibroserviceService } from '../../services/libroservice.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestionlibros',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, RouterLink],
  templateUrl: './gestionlibros.component.html',
  styleUrl: './gestionlibros.component.css'
})

export class GestionlibrosComponent implements OnInit {
  crearLibro: FormGroup;
  submitted = false;
  id: string | null;

  constructor(private at: FormBuilder, private libroService: LibroserviceService, private router: Router,
    private aRoute: ActivatedRoute) {
    this.crearLibro = at.group({
      autor: ['', Validators.required],
      libro: ['', Validators.required],
      year: ['', Validators.required],
      imagen: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
  }

  addLibro() {
    const libro: any = {
      autor: this.crearLibro.value.autor,
      libro: this.crearLibro.value.libro,
      year: this.crearLibro.value.year,
      imagen: this.crearLibro.value.imagen,
    }

    if (this.id === null) {
      this.libroService.addLibroService(libro).then(() => {
        console.log('Libro registrado con éxito');
        this.router.navigate(['/listar']);
      }).catch(error => {
        console.error('Error al registrar el libro:', error); // Cambiado para mostrar un error más descriptivo
      });
    } else {
      this.libroService.actualizarLibroService(this.id, libro).then(() => {
        console.log('Libro actualizado con éxito');
        this.router.navigate(['/listar']);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  editar() {
    if (this.id !== null) {
      this.libroService.obtenerLibro(this.id).subscribe(data => {
        this.crearLibro.patchValue({
          autor: this.crearLibro.value.autor,
          libro: this.crearLibro.value.libro,
          year: this.crearLibro.value.year,
          imagen: this.crearLibro.value.imagen,
        });
      });
    }
  }

}
