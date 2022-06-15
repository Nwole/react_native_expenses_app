import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const TransferItem = (props) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: props.data.isSending ? 0 : 15,
          borderBottomRightRadius: props.data.isSending ? 0 : 15,
          borderTopLeftRadius: props.data.isSending ? 15 : 0,
          borderTopRightRadius: props.data.isSending ? 15 : 0,
        },
      ]}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.desc}>{props.data.heading}</Text>
          <Text style={styles.price}>{props.data.price}</Text>
        </View>
        <Image style={styles.img} source={props.data.img} />
      </View>
    </View>
  );
};

export default TransferItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    padding: 20,
    backgroundColor: "white",
  },
  desc: {
    fontSize: 12,
    color: "grey",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  img: {
    width: 50,
    height: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
