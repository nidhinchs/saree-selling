import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {RegisterComponent} from "./register/register.component";
import {InvoicesComponent} from "./invoices/invoices.component";
import {HomeComponent} from "./home/home.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {GlobalConstants} from "../common/global-constants";
import {AddProductComponent} from "./add-product/add-product.component";
import {ProductsComponent} from "./products/products.component";
import {AddInvoiceComponent} from "./add-invoice/add-invoice.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./AuthGuard";

const routes: Routes = [
  {
    path: GlobalConstants.customer,
    component: CustomersComponent,
    canActivate: [AuthGuard]
  }, {
    path: GlobalConstants.product,
    component: ProductsComponent,
    canActivate: [AuthGuard]
  }, {
    path: GlobalConstants.add_customer,
    component: AddCustomerComponent,
    canActivate: [AuthGuard]
  }, {
    path: GlobalConstants.add_invoice,
    component: AddInvoiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: GlobalConstants.home,
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: GlobalConstants.register,
    component: RegisterComponent
  }, {
    path: GlobalConstants.login,
    component: LoginComponent
  }, {
    path: GlobalConstants.add_product,
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: GlobalConstants.invoices,
    component: InvoicesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
