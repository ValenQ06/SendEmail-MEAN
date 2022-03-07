import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

import { AuthGuard } from "./guard/auth.guard";
import { EmailComponent } from './home/email/email.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'singUp',
    component:RegisterComponent
  },
  {
    path:'sendEmail',
    component:EmailComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
