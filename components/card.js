import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import todo from "../store/reducers/todo";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.curdate}>{props.curdate}</Text>
      <View style={styles.action}>
        <Button title="Edit" onPress={props.edit_todo} />

        <Button title="Delete" onPress={props.delete_todo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#581845",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,

    margin: 20,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 12,
    color: "#888",
    marginLeft: 15,
  },
  curdate: {},
  action: {
    marginTop: -5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Card;
