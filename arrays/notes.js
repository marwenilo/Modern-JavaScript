const notes = ["Note 1", "Note 2", "Note 3"]

// from the end of the arrays
// console.log( notes.pop())
// notes.push("My new note")


//from the start of the arrays

// console.log(notes.shift())
// notes.unshift("My first note")

//from any position in the array

// notes.splice(1,1, "this is the new second item")

notes[2] = "this is now the new note 3" 

//callback function is just a function passed to function

notes.forEach(function(item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)
// console.log(notes[notes.length-1])