import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Details, Home } from "../screens";
import { Auth } from "../screens/Auth";

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <AuthStack.Screen name="Welcome" component={Auth} />
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Details" component={Details} />
  </HomeStack.Navigator>
);

export type RootStackParamList = {
  Movies: { title: string; id: string };
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
}
