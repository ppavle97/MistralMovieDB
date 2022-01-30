import { useEffect, useState, useContext } from "react";
import { ScrollView, Text } from "react-native";
import Item from "../../components/Item/Item";
import Context from "../../context/Context/Context";
import { TvShow } from "./TvShows.model";
import { styles } from "./TvShows.styled";

export const TvShows = (props: any) => {
  const { tvShows, setSelectedItem } = useContext(Context);

  useEffect(() => {}, []);

  const onPress = (item: TvShow) => {
    setSelectedItem(item);

    props.navigation.navigate("Details", {
      title: item.title,
      id: item.id,
    });
  };
  return (
    <ScrollView style={styles.container}>
      {tvShows.map((item: TvShow, index: number) => (
        <Item
          key={index}
          data={item}
          rank={index}
          onPress={() => onPress(item)}
        />
      ))}
    </ScrollView>
  );
};
