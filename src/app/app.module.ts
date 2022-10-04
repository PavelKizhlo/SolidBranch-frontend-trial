import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { TransactionFilterPipe } from './pipes/transaction-filter.pipe';
import { ListPageComponent } from './list-page/list-page.component';

@NgModule({
  declarations: [AppComponent, SummaryPageComponent, TransactionFilterPipe, ListPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
