import React from "react";
import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/card";
import Footer from "../components/Footer";

const TodoScreen = (props) => {
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
    props.navigation.navigate("EditTodo", { todoID: id });
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
