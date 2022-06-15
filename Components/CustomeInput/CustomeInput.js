import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Spacer from "../Spacer/Spacer";

const CustomeInput = ({ placeholder = "enter", icon }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color="grey" />
      <Spacer width={10} />
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default CustomeInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    width: "100%",
    height: 45,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    paddingLeft: 15,
  },
  input: {
    width: "100%",
    height: "100%",
  },
});
