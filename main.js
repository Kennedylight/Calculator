let sortir = document.getElementById("sortir").value
let num1
let num2
let lastResult = 0
let signe = ""
let button1  = document.getElementById('button1')
let button2  = document.getElementById('button2')
let button3  = document.getElementById('button3')
let button4  = document.getElementById('button4')
let button5  = document.getElementById('button5')
let button6  = document.getElementById('button6')
let button7  = document.getElementById('button7')
let button8  = document.getElementById('button8')
let button9  = document.getElementById('button9')
let button0  = document.getElementById('button0')
let virgule  = document.getElementById('virgule')
let add  = document.getElementById('add')
let sous  = document.getElementById('sous')
let div  = document.getElementById('div')
let mul  = document.getElementById('mul')
let solution  = document.getElementById('solution')
let effacerDernierCaractere = document.getElementById('effacerDernierCaractere')
let effaceTout = document.getElementById('effaceTout')
function isFloat(value) {
    return typeof value === "number" && !Number.isInteger(value);
}
// let button1  = document.getElementById('button1')
let input = ""
effaceTout.addEventListener('click', ()=>{
    input = ""
    num1 = 0.0

    document.getElementById("sortir").value = "0"
})
solution.addEventListener("click" , ()=>{
    if(!num1 && !num2){
        return
    }
    if(isFloat(num1) || input.includes(".") ){
        num2 = parseFloat(input)
    }
    else{
        num2 = parseInt(input)
    }
  
  if(signe == "+"){
    lastResult = num1 + num2
    num1 = 0.0
    num2 = 0.0
    resultString = ""+lastResult
    document.getElementById("sortir").value = resultString
    input = document.getElementById("sortir").value
  }
  if(signe == "-"){
    lastResult = num1 - num2
    resultString = ""+lastResult
    document.getElementById("sortir").value = resultString
    input = document.getElementById("sortir").value
  }
  if(signe == "*"){
    lastResult = num1 * num2
    resultString = ""+lastResult
    document.getElementById("sortir").value = resultString
    input = document.getElementById("sortir").value
  }
  if(signe == "/"){
    lastResult = num1 / num2
    resultString = ""+lastResult
    document.getElementById("sortir").value = resultString
    input = document.getElementById("sortir").value
  }
 })
add.addEventListener("click" , ()=>{
   input =  document.getElementById("sortir").value
   if(input.includes(".")){
    num1 = parseFloat(input)
   }
   else{
    num1 = parseInt(input)
   }
   document.getElementById("sortir").value = "0"
   input = ""
   signe = "+"
   console.log(typeof(num1))
})
sous.addEventListener("click" , ()=>{
    input =  document.getElementById("sortir").value
    if(input.includes(".")){
     num1 = parseFloat(input)
    }
    else{
     num1 = parseInt(input)
    }
    document.getElementById("sortir").value = "0"
    input = ""
    signe = "-"
    console.log(typeof(num1))
 })
 div.addEventListener("click" , ()=>{
    input =  document.getElementById("sortir").value
    if(input.includes(".")){
     num1 = parseFloat(input)
    }
    else{
     num1 = parseInt(input)
    }
    document.getElementById("sortir").value = "0"
    input = ""
    signe = "/"
    console.log(typeof(num1))
 })
 mul.addEventListener("click" , ()=>{
    input =  document.getElementById("sortir").value
    if(input.includes(".")){
     num1 = parseFloat(input)
    }
    else{
     num1 = parseInt(input)
    }
    document.getElementById("sortir").value = "0"
    input = ""
    signe = "*"
    console.log(typeof(num1))
 })
effacerDernierCaractere.addEventListener("click" , ()=>{
    input =  document.getElementById("sortir").value
    input = input.slice(0,-1)
    if(!input){
        input = "0"
    }
    document.getElementById("sortir").value = input
})
button1.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
       input = input +"1"
    document.getElementById("sortir").value = input
})

button2.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
    input = input +"2"
    document.getElementById("sortir").value = input
})
button3.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
    input = input +"3"
    document.getElementById("sortir").value = input
})
button4.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
    input = input +"4"
    document.getElementById("sortir").value = input
})
button5.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
    input = input +"5"
    document.getElementById("sortir").value = input
})
button6.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
    input = input +"6"
    document.getElementById("sortir").value = input
})
button7.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
input = input +"7"
document.getElementById("sortir").value = input
})
button8.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
    input = input +"8"
    document.getElementById("sortir").value = input
})
button9.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
    input = input +"9"
    document.getElementById("sortir").value = input
})
button0.addEventListener("click" , ()=>{
    if(input == "0"){
        input = ""
    }
    input = input +"0"
    document.getElementById("sortir").value = input
})
virgule.addEventListener("click" , ()=>{
    if(!( input.includes("."))){
        input = input +"."
    }
    
    document.getElementById("sortir").value = input
})
