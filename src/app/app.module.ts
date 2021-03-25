import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbSlideEventDirection } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { UsersComponent } from './users/users.component';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminlistComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    UsersModule,
    UserModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
