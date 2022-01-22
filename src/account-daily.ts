import { AccountDaily } from './i-faces';

type AccountDailyReducer = (accountId: string, ledger:unknown)=>AccountDaily[];

export const accountDaily:AccountDailyReducer = ()=>{
  throw new Error('reduces general ledger entries to daily balances');
};
