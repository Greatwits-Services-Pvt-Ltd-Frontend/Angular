import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/list/List.Component';
import { LoginComponent} from './users/login/login.Component';
const routes: Routes = [
{path:"admin", loadChildren:() => import('./admin/admin.module')
  .then(mod=>mod.AdminModule)
},
{path:"user", loadChildren:() => import('./user/user.module')
  .then(mod=>mod.UserModule)
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
