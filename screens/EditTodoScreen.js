import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";

const EditTodoScreen = (props) => {
  const route1 = useRoute();
  const todoID = route1.params.todoID; //v6
  //props.navigation.getParam v4
  console.log("check id => " + todoID);
  const editedTodo = useSelector((state) =>
    state.todo.alltodo.find((todo) => todo.id === todoID)
  );
  const [title, setTitle] = useState(editedTodo ? editedTodo.title : "");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
    </View>
  );
};
EditTodoScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("todoID"),
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 3,
    paddingVertical: 6,
  },
});

export default EditTodoScreen;
