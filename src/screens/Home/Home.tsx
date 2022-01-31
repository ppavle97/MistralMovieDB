import { useEffect, useContext, useState } from "react";
import { Button, FlatList, ScrollView, View } from "react-native";
import Item from "../../components/Item/Item";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import Context from "../../context/Context/Context";
import { ItemModel } from "./Item.model";
import { styles } from "./Home.styled";

export const Home = (props: any) => {
  const [filter, setFilter] = useState("movies");
  const [renderItems, setRenderItems] = useState(4);
  const { getMovies, movies, getTvShows, tvShows, setSelectedItem, searched } =
    useContext(Context);

  useEffect(() => {
    getMovies();
    getTvShows();
    setFilter("movies");
  }, []);

  useEffect(() => {
    if (searched.length > 0) setFilter("searched");
  }, [searched]);

  const onPress = (item: ItemModel) => {
    setSelectedItem(item);

    props.navigation.navigate("Details", {
      title: item.title,
      id: item.id,
    });
  };

  const renderData = (expression: string) => {
    switch (expression) {
      case "movies":
        return movies;
        break;
      case "tvshows":
        return tvShows;
        break;
      case "searched":
        return searched;
        break;
      default:
        return movies;
    }
  };
  return (
    <View style={styles.container}>
      <SearchBar />
      <Filter active={filter} setActive={setFilter} />

      <ScrollView style={styles.scrollContainer}>
        {renderData(filter).map((item: any, index: number) => {
          if (index < renderItems)
            return (
              <Item
                searched={filter === "searched" ? true : false}
                key={index}
                data={item}
                rank={index}
                onPress={() => onPress(item)}
              />
            );
        })}
        <Button
          title="Show more"
          onPress={() => setRenderItems(renderItems + 5)}
        />
      </ScrollView>
    </View>
  );
};
