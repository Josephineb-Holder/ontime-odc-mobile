import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calendar } from "react-native-calendars";
import COLORS from "../Constants/Colors";

const Activities = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.gray,
        }}
      >
        <View style={styles.viewStyle}>
          <Text style={styles.eventText}>Attending: React Native Class</Text>
          <Text style={styles.eventText}>Subject: Coding School</Text>
          <Text style={styles.eventText}>Purpose: Training</Text>
        </View>
        <Calendar style={styles.calendar} />
        <View style={styles.viewStyle}>
          <Text>August 2023</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    color: COLORS.primary,
    fontSize: 14,
    marginHorizontal: "8%",
    marginVertical: "3%",
    padding: "3%",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "red",
  },
  eventText: {
    paddingLeft: 15,
  },
  calendar: {
    borderWidth: 2,
    borderColor: "red",
    marginTop: "20%",
    marginHorizontal: "6%",
    marginVertical: "6%",
    padding: "6%",
    borderRadius: 15,
    backgroundColor: "black",
  },
});

export default Activities;
