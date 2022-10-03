export type TransactionType = 'income' | 'outcome' | 'loan' | 'investment';

export interface Name {
  first: string;
  last: string;
}

export interface TransactionItem {
  _id: string;
  amount: string;
  type: TransactionType;
  name: Name;
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface TransactionList {
  total: number;
  data: TransactionItem[];
}
