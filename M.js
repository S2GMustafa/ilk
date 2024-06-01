let input=document.querySelector("input")
let p=document.querySelector("p")

input.addEventListener("input",()=>{
    p.innerHTML=input.value
})

let add=document.querySelector(".add")
let alist=document.querySelector("ul")
add.addEventListener("click",()=>{
    let yas=document.createElement("li")
    yas.innerHTML="Hello"
    alist.append(yas)
})

let cl1=document.querySelector(".red")
let cl2=document.querySelector(".green")
let cl3=document.querySelector(".orange")
let cl4=document.querySelector(".purple")
let h=document.querySelector("h1")

cl1.addEventListener("click",()=>{
    h.style.backgroundColor="red"
})
cl2.addEventListener("click",()=>{
    h.style.backgroundColor="green"
})
cl3.addEventListener("click",()=>{
    h.style.backgroundColor="orange"
})
cl4.addEventListener("click",()=>{
    h.style.backgroundColor="purple"
})

let g=document.querySelector(".goster")
   
g.addEventListener("click",()=>{
    p.innerHTML="Bu Pargrafa Goster/Gizlet Kontrol Ede Bilersiniz"
})
// g.addEventListener("mouseout",()=>{
//     p.style.display="none"
// })