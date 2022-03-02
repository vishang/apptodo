import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodoScreen from "../screens/TodoScreen";
import color from "../constants/constant";
import EditTodoScreen from "../screens/EditTodoScreen";

const Stack = createNativeStackNavigator();

const TodoNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="EditTodo" component={EditTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const TodoNavigator = createStackNavigator(
//   {
//     Todo: TodoScreen,
//     EditTodo: EditTodoScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: color.primary,
//       },
//       headerTintColor: "white",
//     },
//   }
// );

export default TodoNavigator;
