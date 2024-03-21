import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  public camelCaseToWords(str: string) {
    return str
      .replace(/^[a-z]/g, char => ` ${char.toUpperCase()}`)
      .replace(/[A-Z]|[0-9]+/g, ' $&')
      .replace(/(?:\s+)/, char => '');
  };
}
