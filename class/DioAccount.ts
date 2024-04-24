export abstract class DioAccount {
    private name: string
    readonly accountNumber: number
    balance:number = 0
    private status:boolean = true
    deposit_value:number = 0
    constructor(name:string,accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
        // this.balance += deposit_value
        // this.deposit_value = deposit_value
    }

    setName = (name:string): void => {
        this.name = name
        console.log(`Nome alterado para = ${name}`)
    }
    getName = () => {
        return this.name
    }

    deposit = (dep:number):void => {
        if(this.validateStatus()){
            this.balance += dep
            console.log(`Você depositou ${dep} e seu saldo atual é de ${this.balance}`)
        }
    }

    withdraw = (saq:number) :void => {
        if(this.validateStatus()){
            if(saq < this.balance){
                this.balance -= saq
                console.log(`Você sacou ${saq} e seu saldo atual é de ${this.balance}`)
            }else{
                console.log(`Você não tem saldo o suficiente, seu saldo é de ${this.balance}`)
            }

        }
    }
    getBalance = ():void  => {
        console.log(`Seu saldo é de ${this.balance}`)
    }
    validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }
        throw new Error('Conta inválida')
    }
}
