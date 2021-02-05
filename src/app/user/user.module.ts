import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {MatButtonModule} from '@angular/material/button';
import {CustomersComponent} from './customers/customers.component'
import {DataTablesModule} from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
import {InvoicesComponent} from './invoices/invoices.component';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ProductsComponent } from './products/products.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import {MatOptionModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [LoginComponent, RegisterComponent, HeaderComponent, FooterComponent, CustomersComponent, InvoicesComponent, HomeComponent, AddCustomerComponent, AddProductComponent, ProductsComponent, AddInvoiceComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    DataTablesModule,
    HttpClientModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    CustomersComponent
  ]
})
export class UserModule {
}
