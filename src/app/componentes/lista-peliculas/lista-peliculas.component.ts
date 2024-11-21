import { Component, EventEmitter, Output } from '@angular/core';
import { Pelicula, PeliculaService } from '../../servicios/pelicula.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.scss'],
})
export class ListaPeliculasComponent {
  peliculas: Pelicula[] = [];
  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();

  constructor(private servicioPeliculas: PeliculaService) {
    this.servicioPeliculas.obtenerPeliculas().subscribe((data) => {
      this.peliculas = data;
    });
  }

  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada.emit(pelicula);
  }
}
