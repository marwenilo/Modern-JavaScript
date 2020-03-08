let resturant = {
    name: 'ASB',
    guestCapacity: 75,
    geustCount: 0,
    checkAvailability: function(partySize){
            let seatLeft = this.guestCapacity - this.geustCount
        return partySize<=seatLeft
    },
    seatParty:function(newGuests){
        this.geustCount += newGuests 
    },
    removeParty:function(leftGuests){
        this.geustCount -= leftGuests 
    }
}

//seatParty add at guestCount
// seatParty=(newGuests)=>{
//     this.geustCount += newGuests 
// }
//removeParty take the partySize and remove it from guestCount
// removeParty=(leftGuests)=>{
//     this.geustCount -= leftGuests 
// }

resturant.seatParty(72)
console.log(resturant.checkAvailability(4))
resturant.removeParty(5)
console.log(resturant.checkAvailability(4))
 