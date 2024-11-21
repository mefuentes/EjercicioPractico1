import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ListaPeliculasComponent } from './app/componentes/lista-peliculas/lista-peliculas.component';
import { DetallePeliculaComponent } from './app/componentes/detalle-pelicula/detalle-pelicula.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(ListaPeliculasComponent),
    importProvidersFrom(DetallePeliculaComponent),
  ],
}).catch((err) => console.error(err));
