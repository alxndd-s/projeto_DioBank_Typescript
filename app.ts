
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { InvestingAccount } from './class/InvestingAccount'

const investingAccount: InvestingAccount = new InvestingAccount("Alexandre Rod",10)

console.log(investingAccount.investDeposit(100))

const companyAccount: CompanyAccount = new CompanyAccount("Alexandre Rod",10)

console.log(companyAccount.getLoan(10000))



