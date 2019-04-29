import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { UsersService } from './users.service';
import {MatNativeDateModule} from '@angular/material';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatMenuModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchUsersComponent } from './search-users/search-users.component';


const appRoutes: Routes = [ {
  path: '',                     //default component to display
  component: ListUsersComponent
},       {
  path: 'addUser',         //when students added
  component: NewUserFormComponent
},       {
  path: 'listUsers',       //when students listed
  component: ListUsersComponent
},
{
  path: 'editUser/:_id',         //when students edited
  component: NewUserFormComponent
},

];

@NgModule({
  declarations: [
    AppComponent,
    NewUserFormComponent,
    NavigationMenuComponent,
    ListUsersComponent,
    NotFoundComponent,
    SearchUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}

