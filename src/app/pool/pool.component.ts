import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {
  heatsuppliedIp: number;
  airTemp: number = 100;
waterTemp:number=90;
waterTempCelcius:number=Math.round(((this.waterTemp-32)*5/9) * 10) / 10;;
airTempCelcius:number=Math.round(((this.airTemp-32)*5/9) * 10) / 10;
width:number=100;
length:number=80;
depth:number=5.7;
widthSI=this.width*0.30;
lengthSI=this.length*0.30;
depthSI=Math.round(this.depth*0.3048 * 10) / 10;
opHours:number=3000;
refillFreq:number=2;
heatLoss:number=5;
dT:number=17.5;
dTPickup:number=24;
evapCoeff:number;
hwe:number=2257;
Xs:number=0.02;
humidAir:number=0.0098;
velocity:number=0.5;
changeToSI(){
  this.widthSI=this.width*0.3048;
  this.widthSI=Math.round(this.widthSI * 10) / 10;
  this.lengthSI = this.length * 0.3048;
  this.lengthSI=Math.round(this.lengthSI * 10) / 10;
  this.depthSI = this.depth * 0.3048;
  this.depthSI=Math.round(this.depthSI * 10) / 10;
  this.calculate();
}
changeToSITemp(){
 this.airTempCelcius=(this.airTemp-32)*5/9;
  this.airTempCelcius=Math.round(this.airTempCelcius * 10) / 10;
  this.waterTempCelcius=(this.waterTemp-32)*5/9;
  this.waterTempCelcius=Math.round(this.waterTempCelcius * 10) / 10;
  this.calculate();
}
changeToIP(){
  this.width=3.280*this.widthSI;
  this.width=Math.round(this.width * 10) / 10;
  this.length=3.280*this.lengthSI;
  this.length=Math.round(this.length * 10) / 10;
  this.depth=3.280*this.depthSI;
  this.depth=Math.round(this.depth * 10) / 10;
  this.calculate();
}
changeToIPTemp(){
  this.airTemp=(this.airTempCelcius*1.8)+32;
  this.airTemp=Math.round(this.airTemp * 10) / 10;
  this.waterTemp=(this.waterTempCelcius*1.8)+32;
  this.waterTemp=Math.round(this.waterTemp * 10) / 10;
  this.calculate();
}

  constructor() { }

  ngOnInit() {
    this.calculate()
  }
//Internal variables
gs:number;
volume:number;
qHeatup:number;
qSurface:number;
qTotal:number;
area:number;
annualHeat:number;
evapSurfaceArea:number;
heatSupplied:number;

calculate(){
  this.evapCoeff=25+(19*this.velocity)
  this.area=this.width*this.length;
  this.volume=this.width*this.length*this.depth *7.5;
  this.qHeatup=this.volume*8.34*this.dT/(this.dTPickup*1000);
  console.log("qheatUp is"+this.qHeatup);

  this.qSurface=this.heatLoss*(Math.abs(this.airTemp-this.waterTemp))*this.area/1000;
  console.log("qSurface is"+this.qSurface);
  
  this.qTotal=this.qSurface+this.qHeatup;
  console.log("qtotal=" + this.qTotal)
  this.evapSurfaceArea=this.length*this.width*0.093*0.093;
  console.log("evapSurface" + this.evapSurfaceArea)
  console.log("evapCoeff is" + this.evapCoeff)
  this.gs=this.evapCoeff*this.evapSurfaceArea*(this.Xs-this.humidAir)/3600;
  console.log("qs is" + this.gs)
  
  this.heatSupplied=this.hwe*this.gs;
  this.heatsuppliedIp=this.heatSupplied*3.412;
  
  this.annualHeat=((this.qHeatup*this.refillFreq*24)+(this.qSurface*this.opHours)+(this.heatsuppliedIp*this.opHours))/1000;
}


}
