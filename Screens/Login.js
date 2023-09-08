import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import COLORS from "../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <SafeAreaView style={{ marginVertical: hp("5%"), bottom: "5%" }}>
        <View style={{ flex: 1, marginHorizontal: wp("6%") }}>
          <Image
            source={require("../assets/ontimelogo.png")}
            style={{
              height: "5%",
              width: "50%",
              position: "relative",
              top: "15%",
              left: "25%",
            }}
          />

          <View style={{ marginVertical: "25%" }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                color: COLORS.black,
                top: 70,
              }}
            >
              Hey, Welcome back!
            </Text>
            <Text style={{ fontSize: 18, top: 65 }}>
              Seems like you've missed alot
            </Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{ fontSize: 16, fontWeight: 400, marginVertical: "4%" }}
            >
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
                style={{ width: "100%" }}
              />
            </View>
          </View>

          <View style={{ marginBottom: "4%" }}>
            <Text
              style={{ fontSize: 16, fontWeight: 400, marginVertical: "4%" }}
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
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={COLORS.gray}
                secureTextEntry={isPasswordShown}
                style={{ width: "100%", paddingLeft: 20 }}
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

          <View style={{ flex: 1, top: hp("0.4%"), width: "100%" }}>
            <Checkbox
              style={{ marginRight: "5%" }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : undefined}
            />
            <Text style={{ left: wp("8%"), bottom: hp("2.5%") }}>
              Remember Me.
            </Text>

            <Pressable onPress={() => navigation.navigate("Forgot Password")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: "bold",
                  left: wp("52%"),
                  bottom: hp("5%"),
                }}
              >
                Forgot Password?
              </Text>
            </Pressable>

            <Button
              onPress={() => navigation.navigate("DefaultHome")}
              title="Login"
              filled
              style={{
                width: wp("90%"),
                right: wp("1%"),
                top: hp(".5%"),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: "10%",
            }}
          >
            <Text
              style={{ fontSize: 16, color: COLORS.black, bottom: hp("1.5%") }}
            >
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: "bold",
                  marginLeft: wp("2%"),
                  bottom: hp("1.5%"),
                }}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
