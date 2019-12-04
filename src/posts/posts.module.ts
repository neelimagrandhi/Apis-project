import { NgModule } from "@angular/core";
import { Postscomponent } from './posts.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const route:any=[{
    path:"",
    pathMatch:"full",
    redirectTo:"posts"
},{
    path:"posts",
    component:Postscomponent
}]
@NgModule({
    declarations:[
        Postscomponent
    ],
    imports:[
        CommonModule,
        NgSelectModule,
       FormsModule,
       AccordionModule.forRoot(),
        BrowserAnimationsModule,
        RouterModule.forChild(route)
    ]
})
export class Postsmodule{

}