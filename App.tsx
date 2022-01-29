import React from "react";
import { Provider } from "./src/context/Context/State";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}
