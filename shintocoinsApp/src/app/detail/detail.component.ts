import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	tempTransction = {id:0,action:"",amount:0,value:0};
	tempArray = [];
  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }
  tempId = 0;
  ngOnInit() {
  	this.passID();
  	this.getSpecificTransction();
  }
  passID(){
  	this._route.params.subscribe((params: Params) => {
  		console.log(params['id']);
  		this.tempId = params['id'];
  	});
  }
  getSpecificTransction(){
  	this.tempArray = this._httpService.CoinsTransaction;
  	for(var i = 0 ; i<this.tempArray.length;i++){
  		if (this.tempArray[i].id == this.tempId){
  			this.tempTransction = this.tempArray[i];
  		}
  	} 
  }
}
