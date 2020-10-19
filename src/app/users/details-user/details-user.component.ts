import { Component, OnInit } from '@angular/core';
import { AdminUsersService } from 'src/app/services/admin-users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  constructor(
    private UserServer: AdminUsersService, 
    private rout: ActivatedRoute,
    private router : Router
    )
    { }
  public user;
  public Id
  ngOnInit(): void {
    
     this.Id = this.rout.snapshot.paramMap.get("id")

    this.UserServer.getUserDetails(this.Id).subscribe((res:any) => {
      console.log(res);
      this.user = res.user

    })

  }
  deletUser(){
    this.UserServer.deletUser(this.Id).subscribe((res:any)=>{
      this.router.navigate(['/users'])
      console.log(res);
      
    })
  }
}
