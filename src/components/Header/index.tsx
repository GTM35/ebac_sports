import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../redux/store'
import {
  selectContagemFavoritos,
  selectContagemProdutos,
  selectTotalProdutos
} from '../../redux/cart/cart.selector'

const Header = () => {
  const valorTotal = useSelector((root: RootReducer) =>
    selectTotalProdutos(root.cart.itens)
  )

  const produtosCount = useSelector((root: RootReducer) =>
    selectContagemProdutos(root.cart.itens)
  )

  const countProdutosFavoritor = useSelector((root: RootReducer) =>
    selectContagemFavoritos(root.cart.produtosFavoritos)
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{countProdutosFavoritor} favoritos</span>
        <img src={cesta} />
        <span>
          {produtosCount} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
