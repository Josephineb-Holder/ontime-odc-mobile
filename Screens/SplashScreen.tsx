import React, {Dispatch, SetStateAction} from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const Splash = ({ setIsLoading} : SplashProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", margin: 0 }}>
      <LottieView
        source={require("../assets/WaveLoading.json")}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setIsLoading(false)}
      />
    </View>
  );
};
