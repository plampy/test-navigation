import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.page.html',
  styleUrls: ['./child-page.page.scss']
})
export class ChildPagePage implements OnInit {
  constructor(public navController: NavController, public router: Router, public route: ActivatedRoute) {}

  ngOnInit() {
    console.log('Child: ngOnInit');
  }

  go(route: string) {
    this.router.navigate(['../home'], { relativeTo: this.route });
  }
}
