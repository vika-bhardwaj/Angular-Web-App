import { Component, OnInit } from '@angular/core';
import { MarketService } from '../services/market/market.service';
import { IMarket } from '../models/market';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  markets: IMarket[];
  errorMessage: string;
  options = [ 'Modernization', 'Textiles','Telecommunication','Test',];
  optionSelected: any;
  websiteurl:any;
  constructor(private market: MarketService) { }

  ngOnInit() {
  }
  /* Search */
  onSearch(): void {
    console.log("Websiteurl: "+this.websiteurl);
    this.market.getMarkets(this.optionSelected)
    .subscribe(
      markets => this.markets = markets,
      error => this.errorMessage = <any>error
    );
  }
}
