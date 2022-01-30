import { useEffect, useContext } from "react";
import { FlatList, View } from "react-native";
import Item from "../../components/Item/Item";
import SearchBar from "../../components/SearchBar/SearchBar";
import Context from "../../context/Context/Context";
import { ItemModel } from "./Item.model";
import { styles } from "./Home.styled";

export const Home = (props: any) => {
  const { getMovies, movies, getTvShows, tvShows, setSelectedItem } =
    useContext(Context);

  useEffect(() => {
    //getMovies();
  }, []);

  const onPress = (item: ItemModel) => {
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
