import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TransactionItem, TransactionType } from '../shared/interfaces';
import { transactions } from '../shared/transaction-list';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {
  transactions: TransactionItem[] = transactions.data;

  filteredTransactions: TransactionItem[] = [];

  transactionType: TransactionType = 'income';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      switch (params['tab']) {
        case '1':
          this.transactionType = 'outcome';
          break;
        case '2':
          this.transactionType = 'loan';
          break;
        case '3':
          this.transactionType = 'investment';
          break;
        case '0':
        default:
          this.transactionType = 'income';
          break;
      }

      this.filteredTransactions = this.transactions.filter(
        (transaction) => transaction.type === this.transactionType,
      );
    });
  }
}
