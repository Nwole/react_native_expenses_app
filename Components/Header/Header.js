import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="close-outline" size={30} />
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Transfer</Text>
      <Ionicons name="ellipsis-vertical-outline" size={25} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
