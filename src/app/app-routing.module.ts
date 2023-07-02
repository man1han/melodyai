import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { AboutComponent } from './pages/about/about.component';
import { ResearchComponent } from './pages/research/research.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'create', component:CreateComponent},
  {path:'about', component:AboutComponent},
  {path:'research', component:ResearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
