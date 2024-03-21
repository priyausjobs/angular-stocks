import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private baseUrl = 'http://localhost:3000/stocks';
  constructor(
    private http: HttpClient
  ) {}

  getStocks() {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteStock(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
