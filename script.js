let circle=document.getElementById("circle");

let changeColor=document.getElementById("color");
let  changeShape=document.getElementById("shapes");
let shape1=document.getElementById("shape");
let arr=["circles","diamond","triangle","square","trapezoid","parallelogram","pentagon","rabbet","arrow","star","cross"];


changeColor.addEventListener('click',()=>{
    circle.style.backgroundColor="#" + Math.floor(Math.random() * 16777215).toString(16);
    changeColor.style.backgroundColor="#" + Math.floor(Math.random() * 15777215).toString(16);
 })

 changeShape.addEventListener('click',()=>{
    console.log(Math.floor(Math.random()* (10- 0+ 1) + 0));
  shape1.setAttribute("class",arr[Math.floor(Math.random()* (10- 0+ 1) + 0)]);
})