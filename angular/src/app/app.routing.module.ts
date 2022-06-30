import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { HighlightDirective } from './shared/highlight.directive';
import { LoginModule } from './login/login.module';
import { LoginGuard } from './login/login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [HomeComponent, CapitalizePipe, HighlightDirective],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    HttpClientModule,
    LoginModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
