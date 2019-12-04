import { Component } from "@angular/core";
import { ApiServices } from 'src/services/api.services';

@Component({
    selector: "app-posts",
    templateUrl: "posts.component.html",
    styleUrls: ["posts.component.scss"]
})
 
export class Postscomponent{
    currentusers: Object;
    oneAtATime: boolean = true;
    constructor(private service:ApiServices){
        this.fetchusers1()
    }
    fetchusers1(){
        this.service.getuser1().subscribe(
            res=>
            this.currentusers=res
        )
    }
}