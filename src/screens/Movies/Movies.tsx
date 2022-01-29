import { useEffect, useState, useContext } from "react";
import { ScrollView, Text } from "react-native";
import Item from "../../components/Item/Item";
import Context from "../../context/Context/Context";
import { Movie } from "./Movie.model";
import { styles } from "./Movies.styled";

export const Movies = (props: any) => {
  const { getMovies, movies } = useContext(Context);

  useEffect(() => {
    //getMovies();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {movies.map((item: Movie, index: number) => (
        <Item
          key={index}
          data={item}
          rank={index}
          onPress={() =>
            props.navigation.navigate("Details", {
              title: item.title,
              id: item.id,
            })
          }
        />
      ))}
    </ScrollView>
  );
};
