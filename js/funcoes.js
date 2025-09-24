function alteraCorFundo() {
    var vElemento = document.getElementById('mensagem');
    vElemento.style.backgroundColor = 'lightblue';
    vElemento.style.fontFamily = 'Verdana';
    vElemento.style.borderBottom = '1px solid black';
}

function ativaClasse1() {
    var vElemento = document.getElementById('mensagem');
    vElemento.classList.add('classe1');
}