import { Component } from '@angular/core';
import { ListaPeliculasComponent } from './componentes/lista-peliculas/lista-peliculas.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { Pelicula } from './servicios/pelicula.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaPeliculasComponent, DetallePeliculaComponent],
  template: `
    <div>
      <app-lista-peliculas (peliculaSeleccionada)="manejarSeleccionPelicula($event)"></app-lista-peliculas>
      <app-detalle-pelicula (pelicula)="peliculaSeleccionada"></app-detalle-pelicula>
    </div>
  `
})
export class AppComponent {
  peliculaSeleccionada: Pelicula | null = null;

  manejarSeleccionPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }
}
