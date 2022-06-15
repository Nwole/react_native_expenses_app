import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import TransferScreen from "./Components/TransferScreen/TransferScreen";
export default function App() {
  return (
    <View>
      <HomeScreen />
      <StatusBar style="auto" backgroundColor="rgba(0,0,0,0)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
