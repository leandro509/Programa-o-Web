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

function ativaClasse2() {
    var vElemento = document.getElementById('mensagem');
    vElemento.classList.add('classe2');
}

function removeClasse1() {
    var vElemento = document.getElementById('mensagem');
    vElemento.classList.remove('classe1');
}

function toggleClasse2() {
    var vElemento = document.getElementById('mensagem');
    vElemento.classList.toggle('classe2');
}

function adicionaEvento() {
    var vElemento = document.getElementById('fazNada');
    vElemento.addEventListener('click',
        () => { alert('Agora faz alguma coisa') }
    );
}

function adicionarTarefa() {
    var vInput = document.getElementById('tarefa');
    var vLista = document.getElementById('listaTarefas');
    var vItemLista = document.createElement('li');
    vItemLista.innerHTML = vInput.value;
    vLista.appendChild(vItemLista);

    vInput.value = '';
    vInput.focus();
}

function adicionarNoInicio() {
    var vInput = document.getElementById('tarefa');
    var vLista = document.getElementById('listaTarefas');
    var vItemLista = document.createElement('li');

    vItemLista.innerHTML = vInput.value;
    vLista.insertBefore(vItemLista, vLista.firstChild);
    vInput.value = '';
    vInput.focus();
}
    
function removerItem() {
    var vLista = document.getElementById('listaTarefas');
    vLista.removeChild(vLista.lastChild);
}

function armazenaLS() {
    localStorage.setItem("infoLS", "Informação do Local Storage");
}

function armazenaSS() {
    sessionStorage.setItem("infoSS", "Informação do Session Storage");
}

function infoLS() {
    document.getElementById('mensagem').innerHTML = localStorage.getItem('infoLS');
}