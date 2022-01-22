import { AccountDaily } from './i-faces';

interface GeneralLedgerEntryPart {
  generalLedgerId: number;
  posted: string;
  debitAccountId: string;
  creditAccountId: string;
  amount: number;
  referenceId: string;
}

type AccountDailyReducer = (accountId: string, ledger:GeneralLedgerEntryPart[])=>AccountDaily[];

export const accountDaily:AccountDailyReducer = ()=>{
  throw new Error('reduces general ledger entries to daily balances');
};
