import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { useEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Movies">;

export const Details = ({ route, navigation: { setOptions } }: Props) => {
  useEffect(() => {
    setOptions({
      title: route.params.title,
    });
  }, []);

  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
};
