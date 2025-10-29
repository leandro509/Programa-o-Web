var x: number = 1;
//x = 'Blumenau';
var vNome: string = 'Marcos';
//vNome = true;
type Cidade = 'Blumenau' | 'Gaspar' | 'Ilhota';
var vCidade: Cidade;
vCidade = 'Blumenau';
//vCidade = 'blumenau'; vCidade = true; vCidade = 10;
type Variado = 'Marcos' | 100 | true;
var vVariado: Variado;
//vVariado = 'Cardoso'; vVariado = 500; vVariado = false;
var vFlag: boolean;
var vObjeto: object;
vObjeto = {
    marca: "FIAT",
    modelo: "Uno",
    ano: 1995
};
var vCoringa: any;
vCoringa = 10; vCoringa = true; vCoringa = [1, 2, 3, 'Marcos'];
var vDupla: number | string;
vDupla = 20; vDupla = 'BCC'; //vDupla = false;

class Pessoa {
    private nome: string;
    cidade: Cidade;
    constructor(pNome: string, pCidade : Cidade) {
        this.nome = pNome;
        this.cidade = pCidade;
    }

    getNome(): string {
        return this.nome;
    }
    setNome(pNome: string): void {
        this.nome = pNome;
    }
}

var vPessoa: Pessoa = new Pessoa('Marcos','Blumenau');
//vPessoa.nome = 'Cardoso';
vPessoa.setNome('Cardoso');
console.log(vPessoa);

function mostraMsg(pMsg: string): void {
    console.log(pMsg);
}

mostraMsg('Olá, mundo!');

function duplica(pNumero: number): number {
    return pNumero * 2;
}

console.log(duplica(2));

function fDupla(pDupla: number | string): string {
    var vRetorno: string = '';

    if (typeof pDupla === "string") {
        vRetorno = `${pDupla} é string!`;
    }
    if (typeof pDupla === "number") {
        vRetorno = `${pDupla} é number!`;
    }

    return vRetorno;
}

console.log(fDupla(12));
console.log(fDupla('abc'));

var vetNomes: Array<string> = ["Marcos", "Cardoso"];
var vetDupla: Array<number | string> = ["Blumenau", 123];
var vetDupla2: Array<boolean | object> = [
    true,
    { nome: "Marcos", profissao: "Professor" },
    false,
    { departamento: "Produção", orcamento: 500000 }
];
//var vetPessoa: Pessoa[];
var vetPessoa: Array<Pessoa> = [
    new Pessoa("Marcos", "Blumenau"),
    new Pessoa("Aurélio", "Ilhota")
];

console.log(vetPessoa);
console.log(vetPessoa[0]);
console.log(vetPessoa[1]);
console.log(vetPessoa[1].getNome());

interface Generica<pTipo> {
    propriedade: pTipo
}

var vGenerica1: Generica<string> = {
    propriedade: "Marcos" //false
};
var vGenerica2: Generica<string | number> = {
    propriedade: 123
};
vGenerica2 = { propriedade: "BCC" };
var vGenPessoa: Generica<Pessoa> = {
    propriedade: new Pessoa("Alexander", "Blumenau")
}
console.log(vGenPessoa.propriedade.getNome());

interface Generica2<pTipo1, pTipo2> {
    prop1: pTipo1,
    prop2: pTipo2
}
var vGenerica3: Generica2<number, string> = {
    prop1: 12,
    prop2: "DSC"//123
}

var vProfessor = new Pessoa("Dalton", "Blumenau");
var vGenerica4: Generica2<boolean | number, Pessoa> = {
    prop1: false,
    prop2: vProfessor
}
vGenerica4 = {
    prop1: 4,
    prop2: vProfessor
}