import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Greeter = ({ user }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Hello, {user.name}
        </Text>
        <Text style={{ fontSize: 14 }}>Welcome to your wallet!</Text>
      </View>
      <Image style={styles.image} source={{ uri: user.img }} />
    </View>
  );
};

export default Greeter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "blue",
  },
});
