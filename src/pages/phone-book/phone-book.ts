import { PhoneBookDetailPage } from './../phone-book-detail/phone-book-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [ {name: 'Aek',telephone: '0882372538',imageUrl: 'assets/imgs/Koala.jpg'},
                   {name: 'Tar',telephone: '0986866014',imageUrl: 'assets/imgs/Penguins.jpg'},
                   {name: 'Bah',telephone: '0935951819',imageUrl: 'assets/imgs/Chrysanthemum.jpg'} ,
                   {name: 'Far',telephone: '0916466030',imageUrl: 'assets/imgs/Desert.jpg'},
                   {name: 'Sma',telephone: '0888342938',imageUrl: 'assets/imgs/Hydrangeas.jpg'}
                ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetails(item){
    this.navCtrl.push("PhoneBookDetailPage",item)



  }


}//end
