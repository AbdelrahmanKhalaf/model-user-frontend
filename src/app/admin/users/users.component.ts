import { Component, OnInit } from '@angular/core';
import { AdminUsersService } from 'src/app/services/admin-users.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public users : [];
    public search ;
  constructor(private UserServer : AdminUsersService) { }
  searchUser = new FormGroup({
    search: new FormControl('',)
  })
  get serch() {
    return this.search.get("name")
  }
   grtSerch(){
    this.UserServer.searchUser().subscribe((res:any)=>{
      console.log(res);
    })
   }
  ngOnInit(): void {
  this.UserServer.searchUser().subscribe((res)=>{
    console.log(res);
    this.search = res
  },(err)=>{
    console.error(err);
    
  })
    this.UserServer.getUSersAdmin().subscribe((res:any)=>{
      this.users = res.users      
    },(err)=>{
      if(err) return console.error(err);
     })
  }

}
