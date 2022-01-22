create SCHEMA tsc;
GO
create table tsc.Account(
  accountId varchar(20) not null
)
go
create table tsc.Reference(
  referenceId varchar(20),
);
go
create table tsc.GeneralLedger(
  generalLedgerId int,
  posted DATETIME,
  debitAccountId varchar(20),
  creditAccountId varchar(20),
  amount money,
  referenceId varchar(20),
);
go
insert into tsc.Account(accountId)
values ('101.0001 cash'),
('103.0001 bank'),
('121.0001 receivable'),
('158.0001 project'),
('211.0001 payable'),
('245.0001 project'),
('311.0001 income'),
('313.0001 expenses');

go
insert into tsc.Reference(referenceId)
values ('invoice'),
('payment'),
('order'),
('letter'),
('promo'),
('campain');

go
declare @aDate datetime = DATEADD(DAY,-200,GETDATE())

;
with acc as (
  select * from tsc.Account
  union all 
  select * from tsc.Account
  union all 
  select * from tsc.Account
)
SELECT top (500)
  ROW_NUMBER() over (ORDER BY ABS(CHECKSUM(NewId()))) as generalLedgerId,
  DATEADD(MINUTE,ABS(CHECKSUM(NewId()))%43200,@aDate ) posted,
  da.accountId as debitAccountId,
  ca.accountId as creditAccountId,
  convert(money,(ABS(CHECKSUM(NewId()))%1000000))/100 as amount,
  re.referenceId
from 
 acc da
 cross JOIN acc ca 
 CROSS JOIN tsc.Reference as re
where da.accountId <> ca.accountId;


drop table tsc.Account;
drop table tsc.Reference;
drop table tsc.GeneralLedger;
drop SCHEMA tsc