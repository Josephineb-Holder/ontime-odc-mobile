import React from "react";
import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/Colors";
import Button from "../components/Button";

const Welcome = () => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={[COLORS.gray, COLORS.black]}>
      <View style={{ flex: 1 }}>
        <View>
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

          <View
            style={{
              paddingHorizontal: 22,
              position: "absolute",
              top: 400,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 50,
                fontWeight: 700,
                color: COLORS.white,
                top: 25,
              }}
            >
              Let's Get{" "}
              <Text
                style={{ fontSize: 46, fontWeight: 800, color: COLORS.white }}
              >
                Started
              </Text>
            </Text>

            <View style={{ marginVertical: 22 }}>
              <Text
                style={{ fontSize: 20, color: COLORS.white, marginVertical: 4 }}
              >
                Explore more by joining us.
              </Text>
            </View>
            <Button title="Join Now" />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
