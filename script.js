let first=document.getElementById ("first")
let a= first.getAttribute("class")
console.log(a)
let b= first.getAttribute("id")
console.log(b)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
first.setAttribute("class","ok google" )
first.removeAttribute("class" )
first.setAttribute("class","ok google" )
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)
