import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "../Constants/Colors";

const Button = (props) => {
  const filledBgColor = props.color || COLORS.white;
  const outlinedColor = COLORS.primary;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filed ? COLORS.white : COLORS.white;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
    >
      <Text style={{ fontSize: 20, ...{ color: textColor }, fontWeight: 800 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    top: 60,
    paddingVertical: 10,
    borderColor: COLORS.gray,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
