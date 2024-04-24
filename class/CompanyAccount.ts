import { DioAccount } from "./DioAccount"


export class CompanyAccount extends DioAccount {

    constructor(name:string,accountNumber:number){
        super(name,accountNumber)
    }

    getLoan = (emp:number) :void  => {
       
        if(this.validateStatus()){
            
            this.balance += emp

            console.log(`Você pegou um emprestimo de ${emp} e seu saldo atual é de ${this.balance}`)

        }
    }


}
