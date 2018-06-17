import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-till',
  templateUrl: 'till.html'
})
export class TillPage {
  @ViewChild('v50') data50;
  @ViewChild('v20') data20;
  @ViewChild('v10') data10;
  @ViewChild('v5') data5;
  @ViewChild('v2') data2;
  @ViewChild('v1') data1;
  @ViewChild('v50c') data50c;
  @ViewChild('v25c') data25c;
  @ViewChild('v10c') data10c;
  @ViewChild('v05c') data05c;




  constructor(public navCtrl: NavController) {

  }
  addbtn(){
  let a = this.add50();
  let b = this.add20();
  let c = this.add10();
  let d = this.add5();
  let e = this.add2();
  let f = this.add1();
  let g= this.add50c();
    let h= this.add25c();
      let j= this.add10c();
      let i= this.add05c();
  let sum = a+b+c+d+e+f+g+h+i;
  document.getElementById("tilltotal").innerHTML = "$ "+sum;

  }


//function to 50 numbers
  add50(){
      let y = this.data50.value;
      let x = 50*y;
      let show50 = document.getElementById("a50");
      //code here
      show50.innerHTML = "$ "+x;
      return x;}

    //function to 20 numbers
      add20(){
          let y = this.data20.value;
          let x = 20*y;
          let show20 = document.getElementById("a20");
          //code here
          show20.innerHTML = "$ "+x;
          return x;}

        //function to 10 numbers
          add10(){
              let y = this.data10.value;
              let x = 10*y;
              let show10 = document.getElementById("a10");
              //code here
              show10.innerHTML = "$ "+x;
              return x;}

          //function to 5 numbers
            add5(){
                let y = this.data5.value;
                let x = 5*y;
                let show5= document.getElementById("a5");
                //code here
                show5.innerHTML = "$ "+x;
                return x;}

          //function to 2 numbers
            add2(){
                let y = this.data2.value;
                let x = 2*y;
                let show2= document.getElementById("a2");
                //code here
                show2.innerHTML = "$ "+x;
                return x;}

          //function to 1 numbers
            add1(){
                let y = this.data1.value;
                let x = 1*y;
                let show2= document.getElementById("a1");
                //code here
                show2.innerHTML = "$ "+x;
                return x;}

                //function to 50c numbers
                  add50c(){
                      let y = this.data50c.value;
                      let x = .50*y;
                      let show2= document.getElementById("a50c");
                      //code here
                      show2.innerHTML = "$ "+x;
                      return x;}
                //function to 50c numbers
                  add25c(){
                      let y = this.data25c.value;
                      let x = .25*y;
                      let show2= document.getElementById("a25c");
                      //code here
                      show2.innerHTML = "$ "+x;
                      return x;}

                //function to 50c numbers
                        add10c(){
                            let y = this.data10c.value;
                            let x = .10*y;
                            let show2= document.getElementById("a10c");
                            //code here
                            show2.innerHTML = "$ "+x;
                            return x;}

                    //function to 05c numbers
                            add05c(){
                                let y = this.data05c.value;
                                let x = .05*y;
                                let show2= document.getElementById("a05c");
                                //code here
                                show2.innerHTML = "$ "+x;
                                return x;}


}
