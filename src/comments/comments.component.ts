import { Component } from "@angular/core";
import { ApiServices } from 'src/services/api.services';

@Component({
    selector: "app-comments",
    templateUrl: "comments.component.html",
    styleUrls: ["comments.component.scss"]
})

export class Commentscomponent{
    currentusers: Object;
    constructor(private service:ApiServices){
        this.fetchusers2()
    }
    fetchusers2(){
        this.service.getuser2().subscribe(
            res=>
            this.currentusers=res
        )
    }
}