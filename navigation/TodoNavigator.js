import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TodoScreen from "../screens/TodoScreen";
import color from "../constants/constant";
import EditTodoScreen from "../screens/EditTodoScreen";

const TodoNavigator = createStackNavigator(
  {
    Todo: TodoScreen,
    EditTodo: EditTodoScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: color.primary,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(TodoNavigator);
