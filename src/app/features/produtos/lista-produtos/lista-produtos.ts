 import { Component, signal, computed, effect } from '@angular/core';

import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  

    //========================================
    //                   SIGNALS     
    //=============================================
  //Writesignal -> signal (reativo) que permite alterações (com set ou update)
  produtos = signal([
    // mande um sinal (ele atualiza quando um vetor muda ou algo assim)
    { nome: 'Notebook', preco: 3800 },
    { nome: 'Mouse', preco: 179 },
    { nome: 'Caixa de Som', preco: 199.99 },
    { nome: 'Fone De Ouvido', preco: 80 },
  ]);


   produtoSelecionado = signal<string | null>(null);
   
   // o começo de uma nova era (Carrinho de compras)
  carrinho = signal<{ nome: string; preco: number }[]>([]);
 

  //computed 
  totalProdutos = computed(() => this.produtos().length); // observa outro sinal automaticamente

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0); // reduce -> pega so quem tá interessada
  }); // essa linha faz a soma dos produtos.  

 
  quantidadeCarrinho = computed(() => this.carrinho().length); 

  totalCarrinho = computed(() => {
    return this.carrinho().reduce((total, item) => total + item.preco, 0);
  });
  

  
  constructor() { //formada os objetos criados a partir dessa classe

     //estes effects geram mensagens no terminal sempre que alterações são realizadas.

    effect(() => {// effect observa alterações realizadas no sinal que é o vetor de produtos
      console.log('Lista de produtos alterada:', this.produtos());
    });

    
    effect(() => {// effetct observa alterações do computed sinal(valorTotal)  
      console.log('Valor total atualizado:', this.valorTotal());
    });   

     effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
      }// effect observa o title da pagina e altera se a condição for atendida
    });
    

    
 
  }// fim do constructor

  exibirProduto(nome: string) {
    this.produtoSelecionado.set(nome); // Aqui você pode atualizar o estado, abrir modal, etc.
  }
  
 

  // update -> adiciona um item do writeblesignal
  adicionarProduto() {
    this.produtos.update((listaAtual) => [
      ...listaAtual,
      { nome: 'Teclado', preco: 250 },
      { nome: 'Monitor Curvo', preco: 4999.99 },
    ]);
  }
  // 
  substituirProdutos() {
    this.produtos.set([{ nome: 'Produto novo', preco: 0 }]);
  } 
  
  adicionarAoCarrinho(produto: { nome: string; preco: number }) {
    this.carrinho.update((listaAtual) => [...listaAtual, produto]);
  }

  
  



}
