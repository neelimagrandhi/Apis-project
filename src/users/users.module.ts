import { NgModule } from "@angular/core";
import { Userscomponent } from './users.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
const route:any=[{
    path:"",
    pathMatch:"full",
    redirectTo:"users"
},{
    path:"users",
    component:Userscomponent
}]
@NgModule({
    declarations:[
        Userscomponent
    ],
    imports:[
        CommonModule,
        NgSelectModule,
       FormsModule,
        RouterModule.forChild(route)

    ]
})
export class UsersModule{
     
}