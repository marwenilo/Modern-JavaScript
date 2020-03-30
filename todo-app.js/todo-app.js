const p = document.querySelectorAll('p')

p.forEach(el=>{
   let parg = el.textContent.includes('Sleep')
   parg? el.remove():el
})