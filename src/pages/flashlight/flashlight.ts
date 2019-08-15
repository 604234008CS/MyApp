import { Flashlight } from '@ionic-native/flashlight';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private flashlight: Flashlight) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }

  flashOn(){
    this.flashlight.switchOn();

  }

  flashOff(){
    this.flashlight.switchOff();

  }

}
