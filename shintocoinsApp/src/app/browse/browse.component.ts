import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router
  	) { }
  tempTransctions = [];
  ngOnInit() {
  	this.getTransctions();
  }
  getTransctions(){

  	this.tempTransctions = this._httpService.CoinsTransaction;
  	console.log(this._httpService.CoinsTransaction);
  }
  detailsubmit(id){
  	 this._router.navigate(['/detail',id]);
  }
}
