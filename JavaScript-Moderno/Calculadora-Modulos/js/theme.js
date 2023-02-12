export default function theme(){
    const body = document.querySelector('body')
    if(body.classList.contains('dark')){
      body.classList.remove('dark')
      body.classList.add('white')
      document.querySelectorAll('.charKey #clear #equal')
    }else{
      body.classList.remove('white')
      body.classList.add('dark')
    }
  }