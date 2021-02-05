import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    //lazy loading
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(mod => mod.AdminModule)
  },
  {
    //lazy loading
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(mod => mod.UserModule)
  },


  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
