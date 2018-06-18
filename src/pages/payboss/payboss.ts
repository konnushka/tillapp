
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-payboss',
  templateUrl: 'payboss.html'
})
export class PayBossPage {
  @ViewChild('totalorderpayment') top;
  @ViewChild('refundpayment') refund;
    @ViewChild('systemvisapayment') sysvisa;
      @ViewChild('bankvisapayment') bankvisa;
        @ViewChild('otherpayment') other;
  constructor(public navCtrl: NavController, private firedb: AngularFireDatabase) {



  //console.log("Today Date is-> " +TodayDay+"/"+date.getDate());

  }

getBusy(){

  var datapayboss={
    TotalOrderPayment: this.top.value,
    CreditCardPayment: this.bankvisa.value
  }



}


  //click function
paybossfunc(){

console.log('pay boss clicked');
//run check
this.check();

}


check(){
  let system = this.sysvisa.value;
  let bank = this.bankvisa.value;
  let refund = this.refund.value;
  let oldtotal = this.top.value;
  let other = this.other.value;
  let cash = document.getElementById("cashtopay");
  let credit = document.getElementById("creditpayment");

  if (system > bank){
    let sb:number = system-bank;
    let sum2:number = bank + refund + other;
    let sumtotal:number = sb - sum2;
    let newtotal= oldtotal - sumtotal ;

    //get html content

    cash.innerHTML = "$ "+newtotal;
    credit.innerHTML = "$ "+bank;
    //console.log(newtotal,oldtotal,sb,sumtotal,sum2);
    //send data here
    var date = new Date();
    var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var TodayDay = Wday[date.getDay()];
    var head =TodayDay+date.getDate();


    var datapayboss={
      cash: "$"+newtotal,
      bank: "$"+bank,
      total: "$"+oldtotal,
      date: head
    }
    this.firedb.list("/paysum/").push(datapayboss);

  }
  else{
  //solution here
  let x = bank+refund+other;
  let y : number =oldtotal
  let sum = oldtotal-bank-refund-other;
  console.log(sum,y,oldtotal,bank,refund,other);
  cash.innerHTML = "$ "+sum;
  credit.innerHTML = "$ "+bank;

  var date = new Date();
  var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var TodayDay = Wday[date.getDay()];
  var head =TodayDay+date.getDate();


  ////firebase
  var datapayboss={
    cash: "$"+sum,
    bank: "$"+bank,
    total: "$"+oldtotal,
    date: head
  }
  this.firedb.list("/paysum/").push(datapayboss);

  }

}






}
