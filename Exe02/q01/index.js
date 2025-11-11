function calcularSoma() {
    const btn = document.getElementById('btn_calcular');

    btn.addEventListener("click", () => {
        let numero1 = result;
        let numero2 = result2;
        let soma = numero1 + numero2;
        let resultado = document.getElementById('calc_result');
        resultado.innerHTML = "Resultado = " + soma;
    });
}


let num1 = document.querySelector("#num1");
let result = 0;
num1.addEventListener("change", (event) => {
    result = Number(event.target.value);
});

let num2 = document.querySelector("#num2");
let result2 = 0;
num2.addEventListener("change", (event) => {
    result2 = Number(event.target.value);
});

function compararValor() {
    const pagMain = document.querySelector('body');
    let comparar = document.getElementById('compareValue');
    if (result > result2) {
        pagMain.style.backgroundColor = 'red';
        comparar.innerHTML = " Primeiro número é maior";
    } else if (result2 > result) {
        pagMain.style.backgroundColor = 'green';
        comparar.innerHTML = " Segundo número é maior";
    } else {
        pagMain.style.backgroundColor = 'yellow';
        comparar.innerHTML = " Ambos são iguais";
    }
}

function fazerComparacao() {
    const btn = document.getElementById('btn_maior');

    btn.addEventListener("click", () => {
        compararValor();
    })
}

function proxPg() {
    const btn = document.getElementById('next_pg');

    btn.addEventListener("click", () => {
        window.location.href = "pag2.html ";
    });

}

function voltarPg() {
    const btn = document.getElementById('back_pg');

    btn.addEventListener("click", () => {
        window.location.href = "index.html ";
    });

}

const input = document.querySelector('#textArea');
const texto = document.getElementById('textoDigitado');

input.addEventListener("input", updateValue);

function updateValue(e) {
    texto.innerHTML = e.target.value;
}




