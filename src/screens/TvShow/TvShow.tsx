import { View, Button } from "react-native";

export const TvShow = (props: any) => (
  <View>
    <Button
      title="Details TvShow btn"
      onPress={() =>
        props.navigation.navigate("Details", { name: "TvShow Name Details" })
      }
    />
  </View>
);
