import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MineComponent } from './mine/mine.component';
// import { BetaComponent } from './beta/beta.component';
// import { GammaComponent } from './gamma/gamma.component';
import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';
import { DetailComponent } from './detail/detail.component'; 
@NgModule({
  declarations: [AppComponent,MineComponent, BuyComponent, SellComponent, BrowseComponent, DetailComponent],
  imports: [BrowserModule, FormsModule,AppRoutingModule,HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
