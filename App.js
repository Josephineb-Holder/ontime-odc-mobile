import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Orange Ontime App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#383838",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});

export default App;
