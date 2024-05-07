import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto as ProdutoType } from '../../App'

type cartType = {
  itens: ProdutoType[]
  produtosFavoritos: number[]
}

const initialState: cartType = {
  itens: [],
  produtosFavoritos: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduto: (state, action: PayloadAction<ProdutoType>) => {
      if (state.itens.some((elemento) => elemento.id === action.payload.id)) {
        alert('Item já adicionado!')
        return
      } else {
        state.itens = [...state.itens, action.payload]
      }
    },
    addFavorito: (state, action: PayloadAction<number>) => {
      if (state.produtosFavoritos.includes(action.payload)) {
        state.produtosFavoritos = state.produtosFavoritos.filter(
          (elemento) => elemento !== action.payload
        )
      } else {
        state.produtosFavoritos = [...state.produtosFavoritos, action.payload]
      }
    }
  }
})

export const { addProduto, addFavorito } = cartSlice.actions
export default cartSlice.reducer
