import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {
airTemp:number=100;
waterTemp:number=100;
waterTempCelcius:number=Math.round(((this.waterTemp-32)*5/9) * 100) / 100;;
airTempCelcius:number=Math.round(((this.airTemp-32)*5/9) * 100) / 100;
width:number=100;
length:number=80;
depth:number=5.7;
widthSI=this.width*0.3048;
lengthSI=this.length*0.3048;
depthSI=this.depth*0.3048;
opHours:number=3000;
refillFreq:number=2;
heatLoss:number;
dT:number;
dTPickup:number;
evapCoeff:number;
hwe:number;
Xs:number;
humidAir:number;
velocity:number;
changeToSI(){
  this.widthSI=this.width*0.3048;
  this.widthSI=Math.round(this.widthSI * 100) / 100;
  this.lengthSI = this.length * 0.3048;
  this.lengthSI=Math.round(this.lengthSI * 100) / 100;
  this.depthSI = this.depth * 0.3048;
  this.depthSI=Math.round(this.depthSI * 100) / 100;
}
changeToSITemp(){
 this.airTempCelcius=(this.airTemp-32)*5/9;
  this.airTempCelcius=Math.round(this.airTempCelcius * 100) / 100;
}
changeToIP(){
  this.width=3.280*this.widthSI;
  this.width=Math.round(this.width * 100) / 100;
  this.length=3.280*this.lengthSI;
  this.length=Math.round(this.length * 100) / 100;
  this.depth=3.280*this.depthSI;
  this.depth=Math.round(this.depth * 100) / 100;
}
changeToIPTemp(){
  this.airTemp=(this.airTemp*1.8)+32;
}

  constructor() { }

  ngOnInit() {
  }

}
