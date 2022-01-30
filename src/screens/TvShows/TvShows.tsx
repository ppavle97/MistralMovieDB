import { useEffect, useState, useContext } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Item from "../../components/Item/Item";
import Context from "../../context/Context/Context";
import { TvShow } from "./TvShows.model";
import { styles } from "./TvShows.styled";

export const TvShows = (props: any) => {
  const { getTvShows, tvShows, setSelectedItem } = useContext(Context);

  useEffect(() => {
    // getTvShows();
  }, []);

  const onPress = (item: TvShow) => {
    setSelectedItem(item);

    props.navigation.navigate("Details", {
      title: item.title,
      id: item.id,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={tvShows}
        keyExtractor={(item) => item.id}
        updateCellsBatchingPeriod={300}
        initialNumToRender={10}
        renderItem={({ item, index }) => (
          <Item
            key={index}
            data={item}
            rank={index}
            onPress={() => onPress(item)}
          />
        )}
      />
    </View>
  );
};
