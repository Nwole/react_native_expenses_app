import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Greeter from "../Greeting/Greeting";
import Spacer from "../Spacer/Spacer";
import CustomeInput from "../CustomeInput/CustomeInput";
import { Categories, Transactions } from "../Constant/Data";
import Category from "../Category/Category";
import Transaction from "../Transaction/Transaction";
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.horizontalPadding}>
        <Greeter
          user={{
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbyUeML2ISGfY5wC_hdYW5nF0IBs6e71Avg&usqp=CAU",
            name: "Siviwe",
          }}
        />
      </View>
      <Spacer height={20} />
      <CustomeInput placeholder="search" icon="search-outline" />
      <Spacer height={20} />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Categories</Text>
      <Spacer height={20} />
      <View style={{ paddingLeft: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Category
              category={item}
              onPress={(val) => console.warn(`you clicked ${val}`)}
            />
          )}
        />
      </View>
      <View>
        <Spacer height={20} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Transaction history
        </Text>
        <Spacer height={20} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Transaction
              transaction={item}
              onPress={(val) => console.warn(`you clicked ${val}`)}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#e9eeef",
  },
});
