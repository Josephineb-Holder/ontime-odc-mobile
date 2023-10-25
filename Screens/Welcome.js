import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={[COLORS.black, COLORS.white]}>
      <SafeAreaView>
        {/* <View
          style={{
            flex: 1,
            height: hp("80%"),
            width: wp("100%"),
            paddingBottom: hp("10%"),
          }}
        > */}
        <View
          style={{
            height: hp("100%"),
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              position: "relative",
              marginBottom: hp("60%"),
              marginTop: hp("5%"),
            }}
          >
            <Image
              source={require("../assets/icons1.png")}
              style={{
                height: 100,
                width: 200,
                position: "absolute",
                top: 50,
                left: 70,
                transform: [
                  { translateX: 20 },
                  { translateY: 50 },
                  { rotate: "-10deg" },
                ],
              }}
            />

            <Image
              source={require("../assets/icons4.png")}
              style={{
                height: 100,
                width: 100,
                position: "absolute",
                top: -20,
                left: 230,
                transform: [
                  { translateX: 50 },
                  { translateY: 50 },
                  { rotate: "20deg" },
                ],
              }}
            />
            <Image
              source={require("../assets/icons3.png")}
              style={{
                height: 100,
                width: 100,
                position: "absolute",
                top: 150,
                left: -20,
                transform: [
                  { translateX: 30 },
                  { translateY: 60 },
                  { rotate: "15deg" },
                ],
              }}
            />

            <Image
              source={require("../assets/icons2.png")}
              style={{
                height: 210,
                width: 200,
                position: "absolute",
                top: 150,
                left: 120,
                transform: [
                  { translateX: 30 },
                  { translateY: 60 },
                  { rotate: "2deg" },
                ],
              }}
            />
          </View>

          <View
            style={{
              // paddingHorizontal: wp("5.5%"),
              // position: "absolute",
              // top: hp("10%"),
              width: "100%",
              height: hp("58%"),
              padding: "6%",
              marginTop: hp("8%"),
            }}
          >
            <Text
              style={{
                fontSize: 50,
                fontWeight: "700",
                color: COLORS.white,
                top: 25,
              }}
            >
              Let's Get{" "}
              <Text
                style={{ fontSize: 46, fontWeight: "800", color: COLORS.white }}
              >
                Started
              </Text>
            </Text>

            <View style={{ marginVertical: hp("3%") }}>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.white,
                }}
              >
                Explore more by joining us.
              </Text>
            </View>
            <Button
              title="Join Now"
              onPress={() => navigation.navigate("Signup")}
              filled
              style={{ top: wp("5%"), width: "100%" }}
            />

            <View
              style={{
                flexDirection: "row",
                marginTop: hp("4.5%"),
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: COLORS.white }}>
                Have an account?
              </Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.primary,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/* </View> */}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Welcome;
