const palavra = "banco";
var acertouPalavra = new Boolean(false);
document.getElementById('verificarBtn').addEventListener("click", adicionarTabela);

function adicionarTabela() {

    const div = document.getElementById('tentativas');
    const tentativasPalavra = document.getElementById('tentativaPalavra');
    const valorInput = tentativasPalavra.value;

    let tabela = document.getElementById('table_id');
    if (!tabela) {
        div.innerHTML = `
            <table id="table_id" border="1">
                <tbody id="tabela_corpo"></tbody>
            </table>
        `;
        tabela = document.getElementById('table_id');
    }

    const corpo = document.getElementById('tabela_corpo');
    const linha = document.createElement('tr');

    for (let i = 0; i < 5; i++) {
        const celula = document.createElement('td');
        celula.textContent = valorInput.charAt(i);
        linha.appendChild(celula);
    }

    corpo.appendChild(linha);
    
    verificarPalavra(linha, valorInput);

}

function verificarPalavra(linha, valorInput) {

    const celulas = linha.querySelectorAll('td');


    for (let i = 0; i < 5; i++) {
        if (valorInput.charAt(i) === palavra.charAt(i)) {
            celulas[i].style.backgroundColor = 'green';
        } else {
            let letraExiste = false;
            for (let j = 0; j < 5; j++) {
                if (valorInput.charAt(i) === palavra.charAt(j) && j !== i) {
                    letraExiste = true;
                }
            }
            if (letraExiste) {
                celulas[i].style.backgroundColor = 'yellow';
            }
        }

        if (celulas[0].style.backgroundColor === "green" && celulas[1].style.backgroundColor === "green" && celulas[2].style.backgroundColor === "green" &&
            celulas[3].style.backgroundColor === "green" && celulas[4].style.backgroundColor === "green") {
            const divBtnReiniciar = document.getElementById('container_btn_reiniciar');
            divBtnReiniciar.innerHTML = ` 
                             <button onclick="recomecar()" id= "btn_reiniciar">Reiniciar</button>
                        `
            acertouPalavra = true;
            alert("Parabéns você acertou!");
        }
    }

}

function recomecar() {
    const btn = document.getElementById('btn_reiniciar');

    btn.addEventListener("click", () => {
        const div = document.getElementById('tentativas');
        const divBtnReiniciar = document.getElementById('container_btn_reiniciar');
        div.innerHTML = "";
        divBtnReiniciar.innerHTML = "";
    });
}        
