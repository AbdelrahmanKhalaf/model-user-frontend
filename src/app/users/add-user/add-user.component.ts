import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/models/IUser';
import { AdminUsersService } from 'src/app/services/admin-users.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
imge : File = null;
  constructor
    (
     private adminUserServer :AdminUsersService,
      private route: ActivatedRoute,
      private router: Router,
      private http : HttpClient
    ) {

  }
  postUser = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(315)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(315)]),
    email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(315)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(315)]),
  });
  ngOnInit(): void {
  }
  get name() {
    return this.postUser.get("name")

  }
  get email() {
    return this.postUser.get("email")

  }
  get phone() {
    return this.postUser.get("phone")
  }
  get password() {
    return this.postUser.get("password")
  }

  PostUser() {
    let DataUser: Iuser = 
    {
      name: this.name.value,
      phone: this.phone.value,
      email: this.email.value,
      password: this.password.value,
    }
    this.adminUserServer.PostUser(DataUser).subscribe((res:any)=>{
      this.router.navigate(['/users'])
    },(err)=>{
      console.log(err);
    })
  
  }
  fileSlecet(event){
    this.imge =<File>event.target.files[0];
    console.log(this.imge);
    
  }
  fileUpload(){
    const fd = new  FormData();
    fd.append('avatar',this.imge , this.imge.name)
    this.http.post('http://localhost:3000/api/user/imgs',fd).subscribe((res)=>{
      console.log(res);
      
    })
  }
}

