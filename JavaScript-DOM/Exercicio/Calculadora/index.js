const main = document.querySelector('main')
const root = 'vou ver ainda'
const input = document.querySelector('#input')
const resultInput =document.querySelector("#result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const body = document.querySelector('body')

document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
  charKeyBtn.addEventListener('click',function (){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.querySelector('#clear').addEventListener('click',function (){
  const clear = ''
  input.value = clear
  input.focus()
})

document.querySelector('#equal').addEventListener('click',calculate)

input.addEventListener('keydown',function (ev){
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if(ev.key === "Backspace"){
    input.value = input.value.slice(0,-1)
  }
  if(ev.key === "Enter"){
    calculate()
  }
})

function calculate(){
  const result = eval(input.value)
  resultInput.value = result
}

document.querySelector('#copyToClipboard').addEventListener('click',function(ev){
  const button =  ev.currentTarget
  if(button.innerText === 'Copy'){
  navigator.clipboard.writeText(resultInput.value)
  button.innerText = 'Copied!'
  button.classList.add('success')
  myInterval = setInterval(function(){
    button.innerText = 'Copy'
    button.classList.remove('success')
    clearInterval(myInterval);
  },1000);
  }
})

document.querySelector('#themeSwitcher').addEventListener('click',function(){
  if(body.classList.contains('dark')){
    body.classList.remove('dark')
    body.classList.add('white')
    document.querySelectorAll('.charKey #clear #equal')
  }else{
    body.classList.remove('white')
    body.classList.add('dark')
  }
})