let isAccountAlockedd = true
let userRole = "admin"
if(isAccountAlockedd){
    console.log('the account is locked')

} else if (userRole === "admin"){
console.log("welcome Admin")
}else {
    console.log('the account is not locked')
}
    /****************************** */
let temp = 450
let isFreezing = temp <=32
let isHot = temp >=110
if(isFreezing){
    console.log('it is freezing outside')

} else if (isHot){
    console.log('it is hot outside')

} else {
    console.log('it is fine go outside and chill')
}