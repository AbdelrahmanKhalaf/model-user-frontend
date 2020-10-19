import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../models/IUser';
import { DataCustomer } from '../models/dateCustomer';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  constructor(private http: HttpClient) { }
  getUSersAdmin() {
    return this.http.get('http://localhost:3000/api/user')
  };
  getUserDetails(id) {
    return this.http.get(`http://localhost:3000/api/user/${id}`)
  };
  updateUser(id, dataUser) {
    return this.http.put(`http://localhost:3000/api/user/${id}`, dataUser)
  };
  deletUser(id) {
    return this.http.delete(`http://localhost:3000/api/user/${id}`)
  };
  PostUser(DataUser:Iuser) {
    return this.http.post("http://localhost:3000/api/user",DataUser)
  }; 
  searchUser() {
    return this.http.get(`http://localhost:3000/api/search`)
  };  
 createCustomer(dateCustomer : DataCustomer ){
   return this.http.post(`http://localhost:3000/CreateCustomer`, dateCustomer)
 }
 getAvatar(){
   return this.http.get("http://localhost:3000/api/user/imgs")
 }
}
