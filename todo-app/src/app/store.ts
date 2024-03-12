import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/post/postSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, postReducer)

export const store = configureStore({
  reducer: {
    post: persistedReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
