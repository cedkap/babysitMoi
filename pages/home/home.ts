import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

findMovie(){
   /*this.router.navigateByUrl(``);
  console.log('/contact');*/
 this.navCtrl.push(ContactPage);
}
}
