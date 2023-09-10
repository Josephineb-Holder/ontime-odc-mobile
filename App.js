import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Signup,
  Welcome,
  ForgotPassword,
  Events,
  HomeScreen,
  Activities,
} from "./Screens/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Text } from "react-native";
import COLORS from "./Constants/Colors";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            iconColor = focused ? COLORS.primary : color;
          } else if (route.name === "Events") {
            iconName = focused ? "calendar" : "calendar-outline";
            iconColor = focused ? COLORS.primary : color;
          } else if (route.name === "Activities") {
            iconName = focused ? "list" : "list-outline";
            iconColor = focused ? "#dc4d01" : color;
          }

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.black,
                fontWeight: "700",
                fontSize: 15,
              }}
            >
              Home
            </Text>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Events"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.black,
                fontWeight: "700",
                fontSize: 15,
              }}
            >
              Events
            </Text>
          ),
        }}
        component={Events}
      />
      <Tab.Screen
        name="Activities"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.black,
                fontWeight: "700",
                fontSize: 15,
              }}
            >
              Activities
            </Text>
          ),
        }}
        component={Activities}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Default"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
