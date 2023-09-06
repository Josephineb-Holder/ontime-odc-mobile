import { View, Text, Image, SafeAreaView, TextInput } from "react-native";
import React from "react";
import COLORS from "../Constants/Colors";
import Button from "../components/Button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ForgotPassword = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, width: wp("100%") }}>
        <Image
          source={require("../assets/ontimelogo.png")}
          style={{
            height: 50,
            width: 230,
            position: "absolute",
            top: hp("15%"),
            left: wp("22.2%"),
          }}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.black,
            top: hp("25%"),
            left: wp("5%"),
          }}
        >
          Forgot your password?
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 12,
            color: COLORS.black,
            top: hp("23%"),
            left: wp("5%"),
          }}
        >
          Enter your registered phone number below
        </Text>

        <View style={{ marginVertical: hp("28%") }}>
          <View
            style={{
              width: wp("90%"),
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 30,
              left: wp("5%"),
            }}
          >
            <TextInput
              placeholder="Ex:  (077) or (088)"
              placeholderTextColor={COLORS.gray}
              keyboardType="numeric"
              style={{ width: "80%" }}
            />
          </View>
        </View>

        <Button
          title="Confirm"
          filled
          style={{
            marginTop: 20,
            top: hp("-20%"),
            width: "90%",
            left: wp("5%"),
            marginBottom: hp("30%"),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
