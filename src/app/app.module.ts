import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule }    from '@angular/common/http';
import { DetailsUserComponent } from './users/details-user/details-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdatUserComponent } from './users/updat-user/updat-user.component';
import { DeletUserComponent } from './users/delet-user/delet-user.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailsUserComponent,
    AddUserComponent,
    UpdatUserComponent,
    DeletUserComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
