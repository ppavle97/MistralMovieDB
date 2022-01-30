import { useEffect, useState, useContext } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Item from "../../components/Item/Item";
import Context from "../../context/Context/Context";
import { Movie } from "./Movie.model";
import { styles } from "./Movies.styled";

export const Movies = (props: any) => {
  const { getMovies, movies, setSelectedItem } = useContext(Context);

  useEffect(() => {
    //getMovies();
  }, []);

  const onPress = (item: Movie) => {
    setSelectedItem(item);

    props.navigation.navigate("Details", {
      title: item.title,
      id: item.id,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
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
