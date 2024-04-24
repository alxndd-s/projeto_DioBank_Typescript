import { DioAccount } from "./DioAccount"


export class InvestingAccount extends DioAccount {

    constructor(name:string,accountNumber:number){
        super(name,accountNumber)
    }

    investDeposit = (inv:number) :void  => {
       
        if(this.validateStatus()){
            
            this.balance += inv + 10

            console.log(`Você depositou ${inv} ganhando um bônus de ${(10)}`)
            console.log(`Saldo atual ${this.balance}`)
        }
    }


}
