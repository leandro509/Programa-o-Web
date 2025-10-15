class Pessoa2 {
    constructor(pNome) {
        this.nome = pNome
    }
}

//Somente pode importar um usuário
export class Usuario extends Pessoa2 {
    constructor(pNome, pCategoria) {
        super(pNome);
        this.categoria = pCategoria;
    }
}