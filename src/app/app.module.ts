import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStockComponent } from './components/list-stock/list-stock.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { DetailsStockComponent } from './components/details-stock/details-stock.component';
import { FormsModule } from "@angular/forms";
import { NgPipesModule } from "ngx-pipes";

@NgModule({
  declarations: [
    AppComponent,
    ListStockComponent,
    DetailsStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
