import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TransferItem from "../TransferItem/TransferItem";
import Spacer from "../Spacer/Spacer";
const TransferData = (props) => {
  return (
    <View>
      <TransferItem data={props.data[0]} />
      <Spacer height={20} />
      <TransferItem data={props.data[1]} />
    </View>
  );
};

export default TransferData;

const styles = StyleSheet.create({});
