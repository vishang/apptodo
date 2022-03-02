import React from "react";
import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/card";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

const TodoScreen = (props) => {
  const navigation = useNavigation();
  const todo = useSelector((state) => state.todo.alltodo);
  const dispatch = useDispatch();
  const removeid = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const editid = (id) => {
    navigation.navigate("EditTodo", { todoID: id }); //v6
    //props.navigation.navigate("EditTodo", { todoID: id }); v4
  };

  return (
    <View>
      <Footer />

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <Card
            title={itemData.item.title}
            edit_todo={editid.bind(this, itemData.item.id)}
            delete_todo={removeid.bind(this, itemData.item.id)}
          />
        )}
      />
    </View>
  );
};
TodoScreen.navigationOptions = {
  headerTitle: "Todo",
};
export default TodoScreen;
