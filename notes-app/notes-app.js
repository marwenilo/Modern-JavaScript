//DOM - Document Object Model
const notes = [{
   title: 'mMy next trip',
   body: 'I would like to go ti Italie'
   }, {
   title: 'Habbits to work on',
   body: 'Exercise. Eating a bit better'
   }, {
   title: 'Office modification',
   body: 'Get a new seat'
   }]
//Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(p=>{
//    p.textContent="*****"
// })

//add a new element
// const newParg = document.createElement('p')
// newParg.textContent = "teesssttt 3"
// document.querySelector('body').appendChild(newParg)




document.querySelector('#create-note').addEventListener('click',(e)=>{
   e.target.textContent = "The Buttn was clicked"
})
document.querySelector('#remove-all').addEventListener('click', ()=>{
      document.querySelectorAll('.note').forEach(note=>note.remove())
})

document.querySelector('#search-text').addEventListener('input', (e)=>{
   console.log(e.target.value)
})