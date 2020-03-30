const account = {
    name: 'Marwen Magri',
    expenses: [],
    income: [],
    addExpense:function (description,amount){
        this.expenses.push({
            description:description,amount:amount
        })
    },
    getAccountSummary:function () {
        let totalExpense = 0 
        let totalIncome = 0
        let balance = 0
        this.expenses.forEach(expense => {
            totalExpense += expense.amount
        });
        
        this.income.forEach(income => {
            totalIncome += income.amount
        });
         balance = totalIncome - totalExpense
       return  `${this.name} has $${balance} in balance. $${totalIncome} in income, $${totalExpense} in expense`
    },
    addIncome:function (description,amount){
        this.income.push({
            description:description,amount:amount
        })
    },
}

// Expense -> description, amount
//addEspense -> description, amount 
//getAccountSummary -> total up all expenses -> Marwen Magri has $1250 in expenses. 

//add income array to account
//addIncome -> description, amount
//tweak getAccountSummary


//Marwen Magri has a balance of $10. $100 in income. $900 in expense
account.addExpense ('Rent', 950)
account.addExpense('Coffe',2 )
account.addIncome ('Rent', 1000)
account.addIncome('Coffe',2000 )

console.log(account.getAccountSummary())