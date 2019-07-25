import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [ {name: 'Chorong',telephone: '0934721197',imageUrl: 'assets\imgs\m1.jpg'},
                   {name: 'Bomi',telephone: '0986866014',imageUrl: 'assets\imgs\m2.jpg'},
                   {name: 'Eunji',telephone: '0935951819',imageUrl: 'assets\imgs\m3.jpg'},
                   {name: 'Naeun',telephone: '0916466030',imageUrl: 'assets\imgs\m4.jpg'},
                   {name: 'Numjoo',telephone: '0888342938',imageUrl: 'assets\imgs\m5.jpg'}
                ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);

  }

}//end
