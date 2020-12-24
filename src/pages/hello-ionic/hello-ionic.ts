import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }

  public login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

}
