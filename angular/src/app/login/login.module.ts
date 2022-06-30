import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
];

export const LoginRoutes = RouterModule.forChild(routes);

@NgModule({
  imports: [
    LoginRoutes,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [LoginComponent],
  exports: [RouterModule],
  providers: [],
})
export class LoginModule {}
