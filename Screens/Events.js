import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import COLORS from "../Constants/Colors";

const Events = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.gray,
        }}
      >
        <Text
          style={{ color: COLORS.primary, fontSize: 24, fontWeight: "bold" }}
        >
          Upcoming Events
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Events;
