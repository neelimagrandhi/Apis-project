import { Component} from '@angular/core';
import { ApiServices } from 'src/services/api.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent {

  public currentuser:any;
    public id:any;
    public name:any;
    public data:any={"name":null,"username":null,"email":null}
    constructor(private route:ActivatedRoute,private service:ApiServices){
        this.route.params.subscribe(
            (res)=>{
                this.id=res.id;
                this.fetchdata()
            }
        )
    }
    fetchdata(){
        return this.service.getuserInfo(this.id).subscribe(
            res=>{
                this.currentuser=res;
                console.log(this.currentuser)
            }
        )
    }


}
