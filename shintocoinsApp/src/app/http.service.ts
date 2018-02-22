import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  	// requestDojo(cityid){
  	// 	return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id='+cityid+'&APPID=af955f0fd20fdc9d305f96aea6720f93');
  	// }
  	numbers = [1,2,3,4];
  	shintocoinsVal = 0;
  	NumMyCoins = 0;
  	CoinsTransaction = [];
  	TransactionObject = {id:0,action:"",amount:0,value:0};
	// shareNumbers(){
	//     return this.numbers;
	// }
	// addToNumbers(num){
	//     this.numbers.push(num);
	// }
}