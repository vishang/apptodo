import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import todoReducer from "./reducers/todo";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const persistConfig = {
  key: "todo",
  storage: AsyncStorage,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export { store, persistor };
