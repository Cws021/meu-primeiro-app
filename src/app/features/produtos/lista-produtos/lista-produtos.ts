import { Component, signal, computed } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  // writable sognal => signal (relativo) que permite alterações (com set ou update)
  produtos = signal([
    { nome: 'Notebook', preco: 3800 },
    { nome: 'Mouse', preco: 179 },
    { nome: 'Fone', preco: 80 },
  ]);

  totalProdutos = computed(() => this.produtos().length);// computed signal observa outro signal e se atualiza automaticamente

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0);
  });

  exibirProduto(nome: string) {
    console.log('Produto selecionado:', nome);
    // Aqui você pode atualizar o estado, abrir modal, etc.
  }
  //update  -> adiciona um item ao writable signal
  adicionarProduto() {
    this.produtos.update((listaAtual) => [
      ...listaAtual, 
      { nome: 'Teclado', preco: 250 }
    ]);
  }
  // set -> altera um item do weitable signal
  substituirProdutos() {
      this.produtos.set([{ nome: 'Produto novo', preco: 999 }]);
}
}

