import calculate from "./js/calculate.js"
import copy from "./js/copy.js"
import theme from "./js/theme.js"
import { clear,keydown,addEvent } from "./js/keys.js"



document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
  charKeyBtn.addEventListener('click',addEvent)
})

document.querySelector('#clear').addEventListener('click',clear)

document.querySelector('#equal').addEventListener('click',calculate)

input.addEventListener('keydown',keydown)

document.querySelector('#copyToClipboard').addEventListener('click',copy)

document.querySelector('#themeSwitcher').addEventListener('click',theme)