import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'update',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
