import { Component, TemplateRef } from "@angular/core";
import { ApiServices } from 'src/services/api.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-users",
    templateUrl: "users.component.html",
    styleUrls: ["users.component.scss"]
})

export class Userscomponent{
    currentusers: any;
    users: any;
    searchkey: any;
    key: any;
    currentuser: Object;
    id:any;
    constructor(private service:ApiServices,private router:Router,private route:ActivatedRoute){
       this.route.params.subscribe(
            (res)=>{
                this.id=res.id;
                this.fetchdata()
                this.fetchusers()
            }
        )
    }

    fetchusers(){
        this.service.getuser().subscribe(
            res=>{
            this.service.userdata=res;
            this.currentusers=res;
            console.log(this.currentusers)
            }
        )
    }
    fetchdata(){
        this.service.getuserInfo(this.id).subscribe(
            res=>{
                this.currentuser=res;
                console.log(this.currentuser)
            }
        )
    }
    gotoedit(data){
        this.router.navigate(["useredit",data])
    }

    changedata(event){
      /*  var  searchkey=event
        if(searchkey){
            this.users=this.currentusers.filter(user=>{
               /* var name=user.name.toLowerCase()
            if( name.indexOf(searchkey)!==-1)
                return true
            })
            console.log(this.users);
    
      }*/
     var self=this;
     self.key=event;
     if(self.key){
         self.currentusers=self.service.userdata.filter(function(user){
      return user.id==self.key.id
      
    })
}

    }
}