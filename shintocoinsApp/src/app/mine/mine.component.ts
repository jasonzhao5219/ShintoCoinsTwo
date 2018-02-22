import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
 tempMyAnswer = 0;
 tempObject = {id:0,action:"",amount:0,value:0};
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	//this.minesubmit();
  }
  minesubmit(){
  	console.log("what is the answer now? "+this.tempMyAnswer);
  	if (this.tempMyAnswer == 7){
	  	this._httpService.shintocoinsVal += 1;
	  	this._httpService.NumMyCoins += 1;
	  	console.log("Value of coins in Mine : "+this._httpService.shintocoinsVal);
	  	console.log("Numbers of my coins in Mine : "+this._httpService.NumMyCoins);
	  	this.tempObject.id = Math.floor(Math.random()*9999);
	  	this.tempObject.action = "Mine";
	  	this.tempObject.amount = 1;
	  	this.tempObject.value = this._httpService.shintocoinsVal+1;
	  	this._httpService.CoinsTransaction.push(this.tempObject);
  	}
  	else {console.log("answer is incorrect! ");}
  }
}
