import { Produto as ProdutoType } from '../../App'

export const selectProdutosFavoritos = (
  favoritos: number[],
  idProduto: number
) => favoritos.some((p) => p === idProduto)

export const selectTotalProdutos = (produtos: ProdutoType[]) =>
  produtos.reduce((acc, curr) => acc + curr.preco, 0)

export const selectContagemProdutos = (produtos: ProdutoType[]) =>
  produtos.length

export const selectContagemFavoritos = (favoritos: number[]) => favoritos.length
