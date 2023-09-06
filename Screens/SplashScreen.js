import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { View, Image, StyleSheet } from "react-native";

export const Splash = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Ontime Logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Customize background color if needed
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200, // Adjust the size of your logo as needed
    height: 200,
  },
});
