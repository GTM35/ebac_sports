import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { addProduto, addFavorito } from '../../redux/cart/slice'
import { useDispatch, useSelector } from 'react-redux'
import { selectProdutosFavoritos } from '../../redux/cart/cart.selector'
import { RootReducer } from '../../redux/store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = (product: ProdutoType) => {
    dispatch(addProduto(product))
  }

  const handleAddFavorito = (product: number) => {
    dispatch(addFavorito(product))
  }

  const produtoFavorito = useSelector((root: RootReducer) =>
    selectProdutosFavoritos(root.cart.produtosFavoritos, produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => handleAddFavorito(produto.id)} type="button">
        {produtoFavorito
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => handleAddToCart(produto)} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
