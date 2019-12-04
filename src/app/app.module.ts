import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Headercomponent } from 'src/header/header.component';
import { Navcomponent } from 'src/nav/nav.component';
import { Footercomponent } from 'src/footer/footer.component';
import { Homecomponent } from './home/home.component';
import { Servicecomponent } from './service/service.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contactcomponent } from 'src/contact/contact.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { UsereditComponent } from './useredit/useredit.component';
import { LoginComponent } from './login/login.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:any=[{
  path:"",
  pathMatch:"full",
  redirectTo: 'users'
},
{
  path:"users",
  loadChildren:"src/users/users.module#UsersModule"
  },
  {
    path:"posts",
    loadChildren:"src/posts/posts.module#Postsmodule"
    },
    {
   path:"comments",
   loadChildren:"src/comments/comments.module#Commentsmodule"
    },
  {
    path:"useredit/:id",
    component:UsereditComponent
  }] 


@NgModule({
  declarations: [
    AppComponent,
    Headercomponent,
    Navcomponent,
    Footercomponent,
    UsereditComponent,
    Homecomponent,
    Servicecomponent,
    Contactcomponent,
    FormComponent,
    UsereditComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{
    useHash: true
    }),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
