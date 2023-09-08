import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../Constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";
import { StatusBar } from "react-native";

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView style={{ height: wp("50%") }}>
        <View
          style={{
            flex: 1,
            width: wp("100%"),
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ height: hp("11%") }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: COLORS.black,
                top: hp("5%"),
              }}
            >
              Create Account
            </Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
              Email address
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.gray}
                keyboardType="email-address"
                style={{ width: wp("75%") }}
              />
            </View>
          </View>

          <View>
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}
              >
                Full Name
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="Enter your full name"
                  placeholderTextColor={COLORS.gray}
                  keyboardType="ascii-capable"
                  style={{ width: "100%" }}
                />
              </View>
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}
              >
                Phone Number
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 22,
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

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}
              >
                Address
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="Your Address"
                  placeholderTextColor={COLORS.gray}
                  keyboardType="ascii-capable"
                  style={{ width: "80%" }}
                />
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}
              >
                Password
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.gray}
                  secureTextEntry={isPasswordShown}
                  style={{ width: "100%" }}
                />

                <TouchableOpacity
                  style={{ position: "absolute", right: 12 }}
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                >
                  {isPasswordShown == true ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              height: hp("11%"),
              width: wp("82%"),
              left: wp("70%"),
              bottom: hp("5%"),
            }}
          >
            <Checkbox
              style={{ right: wp("70%"), top: hp("5%") }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : undefined}
            />
            <Text style={{ right: wp("61"), top: hp("2.5%") }}>
              I agreed to the terms and conditions.
            </Text>

            <Button
              onPress={() => navigation.navigate("Home")}
              title="Sign Up"
              filled
              style={{
                marginTop: 18,
                marginBottom: wp("2%"),
                width: "100%",
                right: wp("70%"),
                top: 30,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text style={{ fontSize: 16, color: COLORS.black, top: 15 }}>
              Already have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: "bold",
                  marginLeft: 6,
                  top: 15,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
