class Pessoa {
    constructor(pNome, pCidade){
        this.nome = pNome;
        this.cidade = pCidade;
    }

    mostrarPessoa() {
        return 'Pessoa ' + this.nome + ' mora em '
        + this.cidade;
    }
}

//Herança
class Aluno extends Pessoa {
    constructor(pNome, pCidade, pCurso) {
        super(pNome,pCidade);
        this.curso = pCurso;
    }

    //Polimorfismo
    mostrarCompleto() {
        return 'Aluno ' + this.nome + ', reside em ' + this.cidade + ' está cursando ' 
        + this.curso;
    }
}

class Professor extends Pessoa {
    constructor(pNome, pCidade, pDepartamento) {
        super(pNome, pCidade);
        this.departamento = pDepartamento;
    }
    
    //Polimorfismo
     mostrarCompleto() {
        return 'Professor ' + this.nome + ', reside em ' + this.cidade + ' pertence ao depto ' 
        + this.departamento;
    }
}