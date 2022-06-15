import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CardsItem from "./CardsItem";

const Card = (props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Your cards
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardsItem data={item} />}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
