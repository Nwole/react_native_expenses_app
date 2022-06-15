import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Transaction = ({ transaction, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: transaction.backgroundColor },
          ]}
        >
          <Image style={styles.image} source={transaction.img} />
        </View>
        <View>
          <Text>{transaction.heading}</Text>
          <Text>-{transaction.price}</Text>
        </View>
      </View>
      <CustomButton
        width={52}
        height={25}
        radius={5}
        textSize={12}
        text={"details"}
        backgroundColor={"orange"}
        onPress={() => onPress(transaction.heading)}
      />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: 70,
    borderRadius: 10,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingEnd: 15,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    borderRadius: 30,
  },
});
