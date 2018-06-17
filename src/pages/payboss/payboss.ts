import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController) {

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

    let newtotal= (oldtotal -(system - bank))-(bank+refund+other);
    //console.log(newtotal);
    //get html content

    cash.innerHTML = "$ "+newtotal;
    credit.innerHTML = "$ "+bank;
  }
  else{
  //solution here
  let x = bank+refund+other;
  let y : number =oldtotal
  let sum = oldtotal-bank-refund-other;
  console.log(sum,y,oldtotal,bank,refund,other);
  cash.innerHTML = "$ "+sum;
  credit.innerHTML = "$ "+refund;

  }

}






}
