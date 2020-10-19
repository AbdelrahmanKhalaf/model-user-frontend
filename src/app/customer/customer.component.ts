import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminUsersService } from '../services/admin-users.service';
import { DataCustomer } from '../models/dateCustomer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  createCust = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(315)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(315)]),
    email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(315)]),
    avatr: new FormControl('', Validators.required),
  });
  get name() {
    return this.createCust.get("name")

  }
  get email() {
    return this.createCust.get("email")

  }
  get phone() {
    return this.createCust.get("phone")
  }
  get avatr() {
    return this.createCust.get("avatar")
  }
  constructor
    (
      private router: Router
      , private route: ActivatedRoute,
      private server: AdminUsersService
    ) { }

  ngOnInit(): void {
  }
 save() {
    const dataCustomer: DataCustomer =  {
      name: this.name.value,
      phone: this.phone.value,
      email: this.email.value,
      avatr: this.avatr.value
    };
    
    this.server.createCustomer(dataCustomer).subscribe((res) => { 
      console.log(res);
      
    }, () => { })
  }
}
