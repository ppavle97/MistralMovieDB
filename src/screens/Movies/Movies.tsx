import { View, Button } from "react-native";

export const Movies = (props: any) => (
  <View>
    <Button
      title="Details movies btn"
      onPress={() =>
        props.navigation.navigate("Details", { name: "Movies Name Details" })
      }
    />
  </View>
);
