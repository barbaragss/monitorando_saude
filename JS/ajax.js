let conteudo = document.getElementById('ajax-conteudo')

function fetchConteudo (elemento){
    let visualizar = elemento.getAttribute('a-visualizacao') //pegando os elementos do atributo 
    let pasta = elemento.getAttribute ('a-pasta')
    fetch(`/AJAX/${pasta}/${visualizar}.html`)// fazendo uma requisicao ajax, passando o caminho até o arquivo
    .then(response => {
        let html
        html = response.text()
        return html
    })
    .then(html => {
        conteudo.innerHTML = html
    })
}