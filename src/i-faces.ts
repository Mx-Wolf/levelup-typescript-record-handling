export interface GeneralLedgerEntry {
  generalLedgerId: number;
  posted: string;
  debitAccountId: string;
  creditAccountId: string;
  amount: number;
  referenceId: string;
}

export interface AccountEntry {
  generalLedgerId: number;
  posted: string;
  otherAccountId: string;
  debitAmount?: number | undefined;
  creditAmount?: number | undefined;
  referenceId: string;
}

export interface AccountDaily {
  accountId:number;
  date: string;
  debitDayTotal: number;
  creditDayTotal: number;
}
