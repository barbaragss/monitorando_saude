let iconMenu = document.getElementById('icon-menu')
let sidebar = document.getElementById('sidebar')
let tamanhoTela = window.innerWidth //retorna o largura da tela do navegador
let conteudoMain = window.getElementById('main-conteudo-total')

window.addEventListener("resize", () => {
    tamanhoTela = window.innerWidth
   
})  //adicionando um evento a janela - ao objeto window

function barraLateralResponsive(){ 
    if ( tamanhoTela <= 991 ){
        alert('ola mundo')
    }
    else{
       if(sidebar.style.display == 'none'){ //menu escondido
        sidebar.style.display = 'block'
        conteudoMain.style.width = 'calc(100% - 300px)'
       }
       else{ //menu a mostra - esconde o display 
        sidebar.style.display = 'none'
        conteudoMain.style.width = '100%'
       }
    }
}