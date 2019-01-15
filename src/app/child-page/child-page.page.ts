import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.page.html',
  styleUrls: ['./child-page.page.scss']
})
export class ChildPagePage implements OnInit {
  constructor(public navController: NavController, public router: Router) {}

  ngOnInit() {
    console.log('Child: ngOnInit');
  }
}
