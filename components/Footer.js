import React, { useState } from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  ActionSheetIOS,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../store/actions/todo";

const Footer = () => {
  // const addTodo = (todo) => dispatch(ADD_TODO(todo));
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const handleTodo = (title) => {
    console.log("Set => " + inputValue);
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.random() * (5000 - 1) + 1,
        title: inputValue,
      },
    });
  };

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <TouchableOpacity>
          <AntDesign
            name="pluscircle"
            size={40}
            color="black"
            style={{ marginLeft: 10, marginBottom: 10, marginTop: 5 }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter Todo"
          style={styles.input_todo}
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleTodo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  container1: {
    marginTop: 10,
    justifyContent: "center",
  },
  input_todo: {
    marginLeft: 10,
    height: 50,
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
    width: 300,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default Footer;
