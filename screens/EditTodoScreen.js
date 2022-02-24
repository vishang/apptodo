import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const EditTodoScreen = (props) => {
  const todoID = props.navigation.getParam(todoID);
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
