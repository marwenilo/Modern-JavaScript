const account = {
    name: 'Marwen Magri',
    expenses: [],
    addExpense:function (description,amount){
        this.expenses.push({
            description:description,amount:amount
        })
    },
    getAccountSummary:function () {
        let total = 0 
        this.expenses.forEach(obj => {
            total += obj.amount
        });
       return  `${this.name} has ${total} in expenses.`
    }
}

// Expense -> description, amount
//addEspense -> description, amount 
//getAccountSummary -> total up all expenses -> Marwen Magri has $1250 in expenses. 

account.addExpense ('Rent', 950)
account.addExpense('Coffe',2 )
account.addExpense ('Rent', 950)
account.addExpense('Coffe',2 )
account.addExpense ('Rent', 950)
account.addExpense('Coffe',2 )
account.addExpense ('Rent', 950)
account.addExpense('Coffe',2 )
account.addExpense ('Rent', 950)
account.addExpense('Coffe',2 )
console.log(account.getAccountSummary())