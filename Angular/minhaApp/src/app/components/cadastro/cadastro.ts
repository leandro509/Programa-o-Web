import { Component } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  //vPessoa não é uma variavel.
  vPessoa: Pessoa = {
    idPessoa: 1,
    nmPessoa: 'Marcos',
    nmCidade: 'Blumenau',
    vlSalario: 5000
  };
  vPcAumento: number = 0;

  vetPessoas: Pessoa[] = [
    {
      idPessoa: 2,
      nmPessoa: 'Cardoso',
      nmCidade: 'Blumenau',
      vlSalario: 5000
    },
    {
      idPessoa: 3,
      nmPessoa: 'Aurelio',
      nmCidade: 'Ilhota',
      vlSalario: 10000
    },
    {
      idPessoa: 4,
      nmPessoa: 'Alexander',
      nmCidade: 'Jaragua',
      vlSalario: 8000
    }
  ];

  calcularAumento() {
    this.vPessoa.vlSalario *= (this.vPcAumento / 100) + 1;
  }
  
  editaPessoa (pPessoa: Pessoa) {
    this.vPessoa = pPessoa;
  }
}
