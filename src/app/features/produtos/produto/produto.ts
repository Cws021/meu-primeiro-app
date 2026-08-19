import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, UpperCasePipe, PrecoFormatadoPipe,MatButtonModule,MatCardModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {

  @Input() nome: string = '';
  @Input() preco: number = 0;
  @Output() produtoSelecionado = new EventEmitter<string>();
   @Output() produtoAdicionado = new EventEmitter<{
    nome: string;
    preco: number;
  }>();

  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
  }

  adicionarAoCarrinho() {
    this.produtoAdicionado.emit({
      nome: this.nome,
      preco: this.preco
    });
  }

}
//=================================================
//              Aprendi no dia 04.08
//=================================================


//  nome = 'Produto Exemplo';
//  preco = 149.99;



//=================================================
//              Aprendi no dia 04.08
//=================================================



//=================================================
//              Aprendi no dia 05.08
//=================================================
//  mostrarPreco = true;
 
 
 
 
//  produtos = [
//   { nome: 'Monitor', preco: 1500 },
//   { nome: 'Mouse',    preco: 150  },
//   { nome: 'Teclado',  preco: 250  },
//   {nome: 'Caixa de Som', preco: 90}
// ];



//=================================================
//              Aprendi no dia 05.08
//=================================================



