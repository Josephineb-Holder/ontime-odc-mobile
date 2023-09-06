import { View, Text } from "react-native";
import React from "react";
import COLORS from "../Constants/Colors";

const ForgotPassword = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: COLORS.black, fontSize: 20 }}>Forgot Password</Text>
    </View>
  );
};

export default ForgotPassword;
