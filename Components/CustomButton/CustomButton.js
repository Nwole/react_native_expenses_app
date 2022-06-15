import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({
  width = 100,
  height = 30,
  radius = 0,
  textColor = "white",
  textSize = 18,
  text = "Button",
  backgroundColor = "#cb0fe4",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            borderRadius: radius,
          },
        ]}
      >
        <Text style={{ color: textColor, fontSize: textSize }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
