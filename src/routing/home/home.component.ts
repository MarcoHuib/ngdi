import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngdi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClickPages = () => {
    this.router.navigateByUrl('/pages');
  }
  btnClickTopic = () => {
    this.router.navigateByUrl('/topics');
  }

}
