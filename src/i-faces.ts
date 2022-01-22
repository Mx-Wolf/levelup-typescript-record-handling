export interface GeneralLedgerEntry {
  generalLedgerId: number;
  posted: Date;
  debitAccountId: string;
  creditAccountId: string;
  amount: number;
  reference: string;
}

export interface AccountEntry {
  generalLedgerId: number;
  posted: Date;
  otherAccountId: string;
  debitAmount?: number | undefined;
  creditAmount?: number | undefined;
  referenceId: string;
}

export interface AccountDaily {
  accountId:number;
  date: number;
  debitDayTotal: number;
  creditDayTotal: number;
}
