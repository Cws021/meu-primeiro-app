import { Component, signal, computed, effect } from '@angular/core';
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

  totalProdutos = computed(() => this.produtos().length); // computed signal observa outro signal e se atualiza automaticamente

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0);
  });

  exibirProduto(nome: string) {
    this.produtoSelecionado.set(nome);
    // Aqui você pode atualizar o estado, abrir modal, etc.
  }

  produtoSelecionado = signal<string | null>(null);

  //update  -> adiciona um item ao writable signal
  adicionarProduto() {
    this.produtos.update((listaAtual) => [...listaAtual, { nome: 'Teclado', preco: 250 }]);
  }

  // set -> altera um item do weitable signal
  substituirProdutos() {
    this.produtos.set([{ nome: 'Produto novo', preco: 999 }]);
  }


  // método construtor - formata os objetos criados a partir dessa classe
  constructor() {
    // effect observa alterações  realizadas no signal (que é o vetor de produtos)
    effect(() => {
      console.log('Lista de produtos alterada:', this.produtos());
    });

    // effect observa alterações do computed signal (valorTotal)
    effect(() => {
      console.log('Valor total atualizado:', this.valorTotal());
    });

    // effect observa o título da página e altera se a condição for atendida
    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
      }
    });

  } //fim do contructo
  //estes effects  gera mensagens no terminal sempre que alterações são realizadas
}
