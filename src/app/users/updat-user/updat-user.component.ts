import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dataUser } from 'src/app/models/IdataUser';
import { AdminUsersService } from 'src/app/services/admin-users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-updat-user',
  templateUrl: './updat-user.component.html',
  styleUrls: ['./updat-user.component.css']
})
export class UpdatUserComponent implements OnInit {
  constructor(private AdminUserServer : AdminUsersService, private route :ActivatedRoute,private router : Router , private http : HttpClient) { }
  public Id ;
  user
  public imge =  null;
  updateUser = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(315)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(315)]),
    email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(315)]),

  });
  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id')
  }
  get name() {
    return this.updateUser.get("name")

  }
  get email() {
    return this.updateUser.get("email")

  }
  get phone() {
    return this.updateUser.get("phone")
  }
  updateDataUser (){
    let dataUser:dataUser = {
      name:this.name.value,
      phone:this.phone.value,
      email:this.email.value
      
    }
    this.AdminUserServer.updateUser(this.Id,dataUser).subscribe((res:any)=>{
      res.user  = this.user
      this.router.navigate(['/detils/'+this.Id ])
    },(err)=>{
      console.log(err);
      
    })
  }
  fileSlecet(event){
    this.imge =<File>event.target.files[0];
    console.log(this.imge);
    
  }
  fileUpload(){
    const id = this.Id;
    const fd = new  FormData();
    fd.append('avatar',this.imge , this.imge.name)
    this.http.put(`http://localhost:3000/api/user/imge/${id}`,fd).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/detils/'+this.Id ])
      
    })
  }
}
