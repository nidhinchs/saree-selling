import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CustomButtonDirective} from './custom-button.directive';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import {UserModule} from "./user/user.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./user/AuthGuard";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CustomButtonDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
