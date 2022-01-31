import React from "react";
import { Provider } from "./src/context/Context/State";
import Navigation from "./src/navigation/Navigation";
import { LogBox } from "react-native";

// Pavle Pavlovic
// react-native-gesture-handler send error if any of packages use older version.
// My current version is latest
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <Provider>
       <Navigation /> 
    </Provider>
  );
}
