import { NgModule } from "@angular/core";
import { Commentscomponent } from './comments.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
const route:any=[{
    path:"",
    pathMatch:"full",
    redirectTo:"comments"
},{
    path:"comments",
    component:Commentscomponent
}]
@NgModule({
    declarations:[
        Commentscomponent
    ],
    imports:[
        CommonModule,
        NgSelectModule,
       FormsModule,
        RouterModule.forChild(route)

    ]
})
export class Commentsmodule{

}