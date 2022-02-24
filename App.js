import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./store/storage";

import todoReducer from "./store/reducers/todo";
import TodoNavigator from "./navigation/TodoNavigator";

// const rootReducer = combineReducers({
//   todo: todoReducer,
// });

// const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoNavigator />
      </PersistGate>
    </Provider>
  );
}
