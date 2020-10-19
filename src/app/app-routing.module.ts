import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { DetailsUserComponent } from './users/details-user/details-user.component';
import { UpdatUserComponent } from './users/updat-user/updat-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeletUserComponent } from './users/delet-user/delet-user.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'detils/:id',component:DetailsUserComponent},
  {path:'updat-user/:id',component:UpdatUserComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'delet-user/:id',component:DeletUserComponent},
  {path:'customer',component:CustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
