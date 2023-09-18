import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
      <View style={{ color: COLORS.primary, fontSize: 14, marginHorizontal:25, marginVertical: 10,padding:10, borderRadius: 15, borderWidth: 2, borderColor: 'red'}}>
       <Text style={styles.eventText}>Attending: React Native Class</Text> 
        <Text style={styles.eventText}>Subject: Coding School</Text>
       <Text style={styles.eventText}>Purpose: Training</Text> 
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  eventText:{
    paddingLeft: 15
  }
})


export default Activities;
