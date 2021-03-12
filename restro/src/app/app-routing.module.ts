import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestroComponent } from "./add-restro/add-restro.component";
import { ListRestroComponent } from "./list-restro/list-restro.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UpdateRestroComponent } from "./update-restro/update-restro.component";

const routes: Routes = [
  {
    component:AddRestroComponent,
    path:"add-restro"
  },
  {
    component:ListRestroComponent,
    path:"list-restro"
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:RegisterComponent,
    path:"register"
  },
  {
    component:UpdateRestroComponent,
    path:"update-restro"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
