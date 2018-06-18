import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-data',
  templateUrl: 'data.html'
})
export class DataPage {
arrDatahead = [];
arrDataHeadValue = [];

day:string = null;
rev:string = null;
banked:string = null;
cashpaid:string = null;

paysum: FirebaseListObservable<any[]>;



  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase,private socialSharing: SocialSharing) {

    this.paysum = fdb.list('/paysum');

    this.fdb.list("/paysum/").subscribe(_data =>{
      this.arrDatahead = _data;

      console.log(_data);
    });


    for (let p in this.arrDatahead){
      console.log("the head is ->");
      console.log(p);
    }


  }

share(x,y,z,p){

  this.socialSharing.share(x,y,z,p).then(() => {
    // Sharing via email is possible
  }).catch(() => {
    // Sharing via email is not possible
  });
  }



removeTask(task){

  this.paysum.remove(task);

}


}
