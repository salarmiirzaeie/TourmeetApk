import {createStore} from 'redux';
import rootReducer from './src/state-management/reducer/rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let Store = createStore(persistedReducer);
let persistor = persistStore(Store);
export {Store, persistor};
