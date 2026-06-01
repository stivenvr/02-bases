import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page/dragonball-super-page';

export const routes: Routes = [
  // Aquí puedes definir tus rutas
  {
    path: '',
    component: CounterComponent
  },
   {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonballPage
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPage
  },
  {
    path: '**',
    redirectTo: ''
  }
];
