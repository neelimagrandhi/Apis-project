import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class ApiServices{
    userdata: any;
    constructor( private http : HttpClient){}
    getuser(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
    getuserInfo(id: any){
        return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    }
    getuser1(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }
    getuser2(){
        return this.http.get("https://jsonplaceholder.typicode.com/comments")
    }
}