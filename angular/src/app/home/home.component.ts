import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  cities: { name: string; image: string; alt: string }[] = [];
  user: any;
  constructor(
    private router: Router,private homeService: HomeService) {
    console.log('HomeComponent constructor');
  }

  async ngOnInit() {
    this.user = await this.homeService.getCities();
  }

  transfer() {
    return this.homeService.transfer({ name: 'User', amount: 10000 });
  }
  logout() {
    const result = this.homeService.logout();

    this.router.navigateByUrl('/home');
  }
}
