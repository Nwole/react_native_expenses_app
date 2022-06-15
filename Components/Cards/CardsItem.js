import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("screen");
const CardsItem = (props) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={[
          styles.container,
          { backgroundColor: props.data.backgroundColor },
        ]}
      >
        <View>
          <Image style={styles.img} source={props.data.img} />
        </View>
        <View>
          <Text style={{ fontSize: 12, color: "grey" }}>balance</Text>
          <Text style={{ fontWeight: "bold" }}>{props.data.price}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 10 }}>{props.data.cardNum}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardsItem;

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height: 200,
    borderRadius: 15,
    marginRight: 10,
    padding: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  img: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
    borderRadius: 10,
  },
});
