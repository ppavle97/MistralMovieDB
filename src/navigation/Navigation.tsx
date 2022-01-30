import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Details, Movies, TvShows } from "../screens";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();
const MoviesStack = createStackNavigator();
const TvShowStack = createStackNavigator();

const MoviesStackScreen = () => (
  <MoviesStack.Navigator>
    <MoviesStack.Screen name="Movies" component={Movies} />
    <MoviesStack.Screen name="Details" component={Details} />
  </MoviesStack.Navigator>
);

const TvShowStackScreen = () => (
  <TvShowStack.Navigator>
    <TvShowStack.Screen name="TvShow" component={TvShows} />
    <MoviesStack.Screen name="Details" component={Details} />
  </TvShowStack.Navigator>
);
export type RootStackParamList = {
  Movies: { title: string; id: string };
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarLabelPosition:
            Platform.OS == "android" ? "beside-icon" : undefined,
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 15,
          },
          tabBarIconStyle: { display: "none" },
          headerShown: false,
        }}
      >
        <Tabs.Screen name="Movies" component={MoviesStackScreen} />
        <Tabs.Screen name="TvShows" component={TvShowStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
