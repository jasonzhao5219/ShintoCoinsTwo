import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
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
  buysubmit(){
  	this._httpService.shintocoinsVal+=1;
  	this.tempCoinsVal = this._httpService.shintocoinsVal;
  	var convertedNumOfCoins = 0;
  	convertedNumOfCoins= +this.tempBuyCoins;
  	this._httpService.NumMyCoins = this._httpService.NumMyCoins + convertedNumOfCoins;
  	this.tempMyCoins = this._httpService.NumMyCoins;
  	this.tempObject.id = Math.floor(Math.random()*9999);
  	this.tempObject.action = "Buy";
  	this.tempObject.amount = convertedNumOfCoins;
  	this.tempObject.value = this.tempCoinsVal;
  	this._httpService.CoinsTransaction.push(this.tempObject);
  	//console.log("what is object now? : "+this._httpService.TransactionObject.action);
  }
}
