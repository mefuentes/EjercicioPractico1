import { Component, Input } from '@angular/core';
import { Pelicula } from '../../servicios/pelicula.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss'],
})
export class DetallePeliculaComponent {
  @Input() pelicula: Pelicula | null = null;
}

