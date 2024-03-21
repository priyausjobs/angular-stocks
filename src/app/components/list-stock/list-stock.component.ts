import { Component } from '@angular/core';
import { StocksService } from "../../stocks.service";
import _ from 'lodash';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrl: './list-stock.component.scss'
})
export class ListStockComponent {
  public stocks: any = [];
  public showStockDetails: boolean = false;
  public getSelectedStock: any = [];
  public tagFilter = "";

  constructor(
    private stockService: StocksService
  ) {}
  ngOnInit(): void {
    this.getStocks();
  }

  private getStocks() { //get stock list
    this.stockService.getStocks().subscribe((stockData: any) => {
      this.stocks = stockData;
      console.log('this.stocks... ', this.stocks);
    });
  }

  public OnDeleteStock(stockId: any) {
    this.showStockDetails = false;
    this.stockService.deleteStock(stockId).subscribe((result) => {
      console.log(result);
      this.getStocks();
    });
  }

  public OnShowStockDetails(stockId: any) {
    this.showStockDetails = true;
    this.getSelectedStock = _.find(this.stocks, {id: stockId});
    console.log(this.getSelectedStock);
  }

  public camelCaseToWords(str: string) {
    return str
      .replace(/^[a-z]/g, char => ` ${char.toUpperCase()}`)
      .replace(/[A-Z]|[0-9]+/g, ' $&')
      .replace(/(?:\s+)/, char => '');
  };

}
