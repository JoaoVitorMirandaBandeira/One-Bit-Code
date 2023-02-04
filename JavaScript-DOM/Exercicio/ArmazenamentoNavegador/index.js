/*Session storage 
    Armazena dados durante a navegação
    Persite mesmo após mudar de pagina na mesma aba
    Ao fechar a aba do site ele e limpo */
    document.querySelector('#sessionBtn').addEventListener('click', function (){
        const input = document.querySelector('#session')
        sessionStorage.setItem('info', input.value)
        input.value = ''
    })
    document.querySelector('#readSesssion').addEventListener('click', function (){
        const input = document.querySelector('#session')
        const session = sessionStorage.getItem('info')
        input.value = session
    })

/*Local storage
    Dados persitem mesmo apos fechar a aba ou janela 
    Existem para sempre ate serem apagados
 */
    document.querySelector('#localBtn').addEventListener('click', function (){
        const input = document.querySelector('#local')
        localStorage.setItem('info', input.value)
        input.value = ''
    })
    document.querySelector('#readLocal').addEventListener('click', function (){
        const input = document.querySelector('#local')
        const local = localStorage.getItem('info')
        input.value = local
    })
/*Cookies
    Dados armazenados em pequenos arquivos de texto no computador do cliente 
    Podem possuir data de expiração
    Forma mais tradicional de "Lembrar" de informações 
    São enviados na requisição e podem existir no servidor, sendo devolvidos quando uma pagina HTML for solicitada oi
 */

    document.querySelector('#cookieBtn').addEventListener('click', function (){
        const input = document.querySelector('#cookie')
        const cookie = 'info='+input.value+';'
        const expiret = 'expires='+new Date(2023,4,4)+';'
        const path = 'path=/;'
        document.cookie = cookie+ expiret + path;
        console.log(document.cookie)
        input.value = ''
    })
    document.querySelector('#cookie2Btn').addEventListener('click', function (){
        const input = document.querySelector('#cookie2')
        const cookie = 'nome='+input.value+';'
        const expiret = 'expires='+new Date(2023,4,4)+';'
        const path = 'path=/;'
        document.cookie = cookie+ expiret + path;
        console.log(document.cookie)
        input.value = ''
    })