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
const ps = document.querySelectorAll('p')
ps.forEach(p=>{
   p.textContent="*****"
})

//add a new element
const newParg = document.createElement('p')
newParg.textContent = "teesssttt 3"
document.querySelector('body').appendChild(newParg)