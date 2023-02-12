export default function copy(ev){
    const button =  ev.currentTarget
    if(button.innerText === 'Copy'){
    navigator.clipboard.writeText(document.querySelector("#result").value)
    button.innerText = 'Copied!'
    button.classList.add('success')
    let myInterval = setInterval(function(){
        button.innerText = 'Copy'
        button.classList.remove('success')
        clearInterval(myInterval);
    },1000);
    }
}