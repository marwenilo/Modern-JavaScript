let myAccount = {
    name: 'Marwen Magri',
    exprenses: 0,
    income: 0

}
// let otherAccount = myAccount
// otherAccount.income=1000
// otherAccount={}
// let addExpense = (account, amount) =>{
 
//     account.exprenses = account.exprenses + amount

//         console.log(account)
// }


//addIncome 

//resetAccount

//getAccountSummary
//*** account for andrew has $900, $1000 in income. $ 100 expense */


/// 


let  addIncome=(account,income)=>{
account.income += income 
console.log(account)
}
let  addExpense=(account,exprenses)=>{
    account.exprenses += exprenses 
    console.log(account)
}
let  getAccountSummary=(account)=>{
    let summary = account.income - account.exprenses
    console.log(`Summary :  Account for ${account.name} has $${summary}. $${account.income} in income. $${account.exprenses} in expenses`)
}
let  resetAccount=(account)=>{
    account.income = 0
    account.exprenses = 0
}
getAccountSummary(myAccount)
addIncome(myAccount, 1000)
getAccountSummary(myAccount)
addExpense(myAccount,100)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
console.log(myAccount)