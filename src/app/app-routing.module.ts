import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';





const routes: Routes = [

{path:'',component:HeroesComponent},
{path:'heroe/:id',component:HeroeComponent},
{path:'heroe',component:HeroeComponent},
{path:'heroes',component:HeroesComponent},
{path: 'about',component:AboutComponent},
{path: 'home',component:HomeComponent},
{path:'**',component:HeroesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
