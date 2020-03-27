const notes = [{
title: 'My next trip',
body: 'I would like to go ti Italie'
}, {
title: 'Habbits to work on',
body: 'Exercise. Eating a bit better'
}, {
title: 'Office modification',
body: 'Get a new seat'
}]

// from the end of the arrays
// console.log( notes.pop())
// notes.push("My new note")


//from the start of the arrays

// console.log(notes.shift())
// notes.unshift("My first note")

//from any position in the array

// notes.splice(1,1, "this is the new second item")

// notes[2] = "this is now the new note 3" 

//callback function is just a function passed to function

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length)
// console.log(notes)
// console.log(notes[notes.length-1])


//for loop
// for (let count = 0; count< notes.length; count++ ){
//     console.log(notes[count])

// }


// console.log(notes.indexOf({})) 




// const index = notes.findIndex( function(note, index){
//  console.log(note)
//  return note.title === 'Habbits to work on'
// })
// console.log(index)



// const  findNote = (notes, noteTitle) =>{
// const index =  notes.findIndex( (note, index)=>{
// return note.title.toLowerCase() === noteTitle.toLowerCase()
// })
// return notes[index]
// }



// const  findNote = (notes, noteTitle) =>{
    
//    return notes.find( (note, index)=>{
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
    
//     }

const findNotes = (notes,query)=>{
    
 return notes.filter((note,index)=> {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
  
}



console.log(findNotes(notes, 'work'))

// const note = findNote (notes,'office modification')
// console.log(note)
