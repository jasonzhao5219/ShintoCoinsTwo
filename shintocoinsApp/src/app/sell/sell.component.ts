import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
	tempCoinsVal = 0;
	tempMyCoins = 0;
	tempBuyCoins = 0;
	tempObject = {id:0,action:"",amount:0,value:0};
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	this.getCoinsVal();
  }
  getCoinsVal(){
  	this.tempCoinsVal = this._httpService.shintocoinsVal;
  	this.tempMyCoins = this._httpService.NumMyCoins;

  }
  sellsubmit(){
  	this._httpService.shintocoinsVal-=1;
  	this.tempCoinsVal = this._httpService.shintocoinsVal;
  	var convertedNumOfCoins = 0;
  	convertedNumOfCoins= +this.tempBuyCoins;
  	if(this._httpService.NumMyCoins>convertedNumOfCoins){
  		this._httpService.NumMyCoins = this._httpService.NumMyCoins - convertedNumOfCoins;
  		this.tempMyCoins = this._httpService.NumMyCoins;
  		this.tempObject.id = Math.floor(Math.random()*9999);
	  	this.tempObject.action = "Sell";
	  	this.tempObject.amount = convertedNumOfCoins;
	  	this.tempObject.value = this.tempCoinsVal;
	  	this._httpService.CoinsTransaction.push(this.tempObject);
  	}
  	else{
  		console.log("You dont have that much coins!");
  	}

  }
}