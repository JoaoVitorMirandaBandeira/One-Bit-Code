const start = document.querySelector('#comecar')
let virtualBoard = []
let turnPlayer = ''
const fields = document.querySelectorAll('#tabuleiro span')

start.addEventListener('click', iniciar)

function popularField(){
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlay').innerText = playerInput.value
}

function iniciar(){
  virtualBoard = [['','',''],['','',''],['','','']]
  turnPlayer = 'play1'
  document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlay"></span>'
  popularField()

  fields.forEach(function(element){
    element.classList.remove('win')
    element.innerText = ''
    element.classList.add('cursor')
    element.addEventListener('click', clickedField )
  })
}

function clickedField(ev){
  let field = ev.currentTarget
  let region = field.dataset.region
  let vectors = region.split('.')
  let positionX = vectors[0]
  let positionY = vectors[1]
  if(turnPlayer==='play1'){
    field.innerText = 'X'
    virtualBoard[positionX][positionY] = 'X'
  }else{
    field.innerText = 'O'
    virtualBoard[positionX][positionY] = 'O'
  }
  console.clear()
  console.table(virtualBoard)
  disabledField(field)

  let allWin = allWins()

  if(allWin.length > 0){
    changeClass(allWin)
  }else if(virtualBoard.flat().includes('')){
    turnPlayer = turnPlayer === 'play1' ? 'play2' : 'play1'
    popularField()
  }else{
    document.querySelector('h2').innerHTML ='Empate!'
  }

}

function disabledField(ev){
  ev.classList.remove('cursor')
  ev.removeEventListener('click', clickedField)
}

function allWins(){
  let victory = []
  if(virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[0][1] && virtualBoard[0][0] === virtualBoard[0][2]){
    victory.push('0.0','0.1','0.2')}
  if(virtualBoard[1][0] && virtualBoard[1][0] === virtualBoard[1][1] && virtualBoard[1][0] === virtualBoard[1][2]){
    victory.push('1.0','1.1','1.2')}
  if(virtualBoard[2][0] && virtualBoard[2][0] === virtualBoard[2][1] && virtualBoard[2][0] === virtualBoard[2][2]){
    victory.push('2.0','2.1','2.2')}
  if(virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][0] && virtualBoard[1][0] === virtualBoard[2][0]){
    victory.push('0.0','1.0','2.0')}
  if(virtualBoard[0][1] && virtualBoard[0][1] === virtualBoard[1][1] && virtualBoard[1][1] === virtualBoard[2][1]){
    victory.push('0.1','1.1','2.1')}
  if(virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][2] && virtualBoard[1][2] === virtualBoard[2][2]){
    victory.push('0.2','1.2','2.2')}
  if(virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][1] && virtualBoard[1][1] === virtualBoard[2][2]){
    victory.push('0.0','1.1','2.2')}
  if(virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][1] && virtualBoard[1][1] === virtualBoard[2][0]){
    victory.push('0.2','1.1','2.0')}
  return victory
}

function changeClass(vectors){
  vectors.forEach(function(region){
    document.querySelector('[data-region="' + region + '"]').classList.add('win')
  })
  const playerInput = document.getElementById(turnPlayer).value
  document.querySelector('h2').innerHTML = playerInput + 'Venceu!'
  fields.forEach(function(ev){
    ev.classList.remove('cursor')
    ev.removeEventListener('click', clickedField)
  })
}