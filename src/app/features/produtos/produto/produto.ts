import { Component, Input, Output, EventEmitter, Injectable, inject } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ItemCarrinho } from '../../../core/models/item-carrinho';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, MatButtonModule, MatCardModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome: string = '';
  @Input() preco: number = 0;
  @Output() produtoSelecionado = new EventEmitter<string>();
  // O evento agora usa o tipo compartilhado ItemCarrinho.
  @Output() produtoAdicionado = new EventEmitter<ItemCarrinho>();
  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
  }
  adicionarAoCarrinho() {
    // O produto enviado ao carrinho segue o modelo compartilhado.
    this.produtoAdicionado.emit({
      nome: this.nome,
      preco: this.preco,
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
