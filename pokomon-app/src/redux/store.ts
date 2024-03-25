import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon'
import pageReducer from './features/page/pageSlice'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['page'],
}

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  page: pageReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pokemonApi.middleware),
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
