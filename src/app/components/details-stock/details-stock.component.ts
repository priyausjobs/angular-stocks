import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-stock',
  templateUrl: './details-stock.component.html',
  styleUrl: './details-stock.component.scss'
})
export class DetailsStockComponent {
  @Input() selectedStock: any;
  ngOnInit(): void {
    console.log('from parent',this.selectedStock);
  }
}
