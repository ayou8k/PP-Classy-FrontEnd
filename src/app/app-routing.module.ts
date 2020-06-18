import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantemListComponent} from './etudiantem/etudiantem-components/etudiantem-list/etudiantem-list.component';

const routes: Routes = [
  { path: 'class', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule) },
  { path: 'etudiantem', loadChildren: () => import('./etudiantem/etudiantem.module').then(m => m.EtudiantemModule) },
  { path: 'elementmodule', loadChildren: () => import('./elementmodule/elementmodule.module').then(m => m.ElementmoduleModule) },
  // { path: 'class', loadChildren: () => import('./etudiantem/etudiantem.module').then(m => m.EtudiantemModule) },
  // { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  // { path: 'login', component: LoginComponent }
  // {path:'mesem-list',component: EtudiantemListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
