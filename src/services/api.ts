import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto as ProdutoType } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<ProdutoType[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export default api
export const { useGetProdutosQuery } = api

//https://fake-api-tau.vercel.app/api/ebac_sports
