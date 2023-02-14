const dayjs = require("dayjs")
let date = '2002-05-21'

function birthday(date){
    const agora = dayjs()
    const dateFormat = dayjs(date)
    let diferenca = agora.diff(dateFormat,'years')
    let aniversario = dateFormat.add((diferenca +1),'years')
    let diffDias = aniversario.diff(agora,'days')
    aniversario = aniversario.format('DD/MM/YYYY')
    console.log(`\n\nVocê atualmente tem ${diferenca} anos,\nseu próximo aniversario sera em ${aniversario},\ne a partir de hoje faltam ${diffDias} dias para seu aniversário,\nno qual você fara ${diferenca+1} anos.\n\n`)
}
birthday(date)
