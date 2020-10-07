import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AdminComponent } from './components/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieComponent,
    MovieFormComponent,
    CustomerComponent,
    CustomerEditComponent,
    UserEditComponent,
    AdminComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, MatDialogModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
