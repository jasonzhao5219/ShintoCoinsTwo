import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
     // this.getTasksFromService();
     this.test();
    }
  // getTasksFromService(){
  //      let observable = this._httpService.requestDojo(this.cityid);
  //      observable.subscribe(data => {
  //        console.log("what is data send back  : ",data);
  //        this.tempdata = data;
  //      });
  //   }
  test(){  console.log("may i be root component?");}
}
