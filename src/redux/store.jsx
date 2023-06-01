import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//import { rootReducer } from './rootReducer';
import { authReducer } from './auth/authSlice';

//import { tasksReducer } from './taskSlice';
import { tasksReducer } from './taskSlice';
import { filtersReducer } from './filterSlice';

//const persistedReducer = persistReducer(persistConfig, tasksReducer);
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: tasksReducer,
    filters: filtersReducer,
    //     rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
