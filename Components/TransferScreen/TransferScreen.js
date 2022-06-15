import { StyleSheet, Text, ScrollView, View, Dimensions } from "react-native";
import React from "react";
import Header from "../Header/Header";
import TransferData from "../TransferData/TransferData";
import { Transfer, Cards } from "../Constant/Data";
import Spacer from "../Spacer/Spacer";
import Card from "../Cards/Cards";
import CustomButton from "../CustomButton/CustomButton";
const { width } = Dimensions.get("screen");
const TransferScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <ScrollView>
          <Spacer height={20} />
          <TransferData data={Transfer} />
          <Spacer height={20} />
          <Card data={Cards} />
          <View style={styles.btncontainer}>
            <CustomButton
              width={width * 0.7}
              height={40}
              radius={5}
              textSize={18}
              text={"Proceed"}
              backgroundColor={"orange"}
              onPress={() => onPress()}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#e9eeef",
  },
  btncontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
