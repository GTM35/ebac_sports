import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/slice'
import logger from 'redux-logger'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
