// Exercício 1 -

//a)

// Utilizados para iniciar valores internos

//b)-


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
      
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  

    public get getCpf():string{
        return this.cpf;
    }
    public get getName():string{
        return this.name;
    }
    public get getAge():number{
        return this.age;
    }
    public get getTransaction():Transaction[]{
        return this.transactions
    }
    public set setTransaction(transactions:Transaction[]){
       this.transactions = transactions;
    }
  }
  const user1 = new UserAccount('388.433.358-00,', 'Leandro', 32);
  console.log(user1);

  const user2 = new UserAccount('388.433.358-01,', 'Lais', 27);
  console.log(user2);


//c)

// Podemos ter acesso através de um Get

//____________________________________________________________________________________

// Exercício 2 -


  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

    public get getDate():string{
        return this.date;
    
    }
    public get getValue():number{
        return this.value;
    }
    public get getDescription():string{
        return this.description;
    }


}

const transaction = new Transaction("transação", 260.90, "14/02/2022");
console.log(user1,  transaction);

//__________________________________________________________________________________

// Exercício 3 -

class Bank {
    private accounts: UserAccount[];

    constructor (accounts:UserAccount[]){
        this.accounts = accounts;
    }

    public get getAccounts():UserAccount[]{
        return this.accounts
    }
    public set setAccounts(accounts:UserAccount){
        this.accounts.push(accounts)  
    }
}

