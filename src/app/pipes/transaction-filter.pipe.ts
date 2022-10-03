import { Pipe, PipeTransform } from '@angular/core';
import { TransactionItem, TransactionType } from '../shared/interfaces';

@Pipe({
  name: 'transactionFilter',
})
export class TransactionFilterPipe implements PipeTransform {
  transform(transactions: TransactionItem[], type: TransactionType): TransactionItem[] {
    return transactions.filter((transaction) => transaction.type === type);
  }
}
