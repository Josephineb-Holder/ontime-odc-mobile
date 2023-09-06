import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup, Welcome, ForgotPassword } from "./Screens/index";
import HomeScreen from "./Screens/HomeScreen";
import UpcomingEvents from "./Screens/UpcomingEvents";
import Activities from "./Screens/Activities";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
<Tab.Navigator>
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Upcoming Events' component={UpcomingEvents}/>
    <Tab.Screen name='Activities' component={Activities}/>
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
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: true }}
        />
         <Stack.Screen 
      name='Default'
      component={Tabs}
      options={{ headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
