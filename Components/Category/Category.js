import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("screen");
const Category = ({ category, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(category.heading)}>
      <View
        style={[
          styles.container,
          { backgroundColor: category.backgroundColor },
        ]}
      >
        <Image style={styles.image} source={category.img} />
        <Text style={{ fontSize: 15, marginTop: 10 }}>{category.heading}</Text>
        <Text style={{ fontSize: 10, marginTop: 5, color: "white" }}>
          {category.paragraph}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    width: width * 0.33,
    height: 150,
    borderRadius: 15,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
});
