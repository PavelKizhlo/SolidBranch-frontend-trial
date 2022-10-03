import { Component } from '@angular/core';

import { TransactionList } from '../shared/interfaces';
import { transactions } from '../shared/transaction-list';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
})
export class SummaryPageComponent {
  transactions: TransactionList = transactions;
}
