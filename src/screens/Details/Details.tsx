import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { useEffect, useContext, useState } from "react";
import { styles } from "./Details.styled";
import Context from "../../context/Context/Context";

const star = require("./assets/star.png");

type Props = NativeStackScreenProps<RootStackParamList, "Movies">;

export const Details = ({ route, navigation: { setOptions } }: Props) => {
  const { movies } = useContext(Context);
  const [showMore, setShowMore] = useState(false);
  const {
    title,
    year,
    image,
    imDbRatingCount,
    imDbRating,
    description,
    fullTitle,
    crew,
  } = movies[0];
  useEffect(() => {
    setOptions({
      title: route.params.title,
    });
  }, []);

  const castArr = crew.split(",");
  return (
    <View style={styles.container}>
      <View style={styles.rank}>
        <Text style={styles.rankValue}>12</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.mainTop}>
          <Image
            style={styles.movieImage}
            source={{
              uri: image,
            }}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ut elit neque.
            </Text>
            <View style={styles.rate}>
              <Image style={styles.icons} source={star} />
              <Text style={styles.rateValue}>{imDbRating}</Text>
              <Text style={styles.rateNumber}>(Count:{imDbRatingCount})</Text>
            </View>
          </View>
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>

        <View style={styles.castContainer}>
          <Text style={styles.castTitle}>Cast:</Text>
          <View style={styles.castNames}>
            {castArr.map((item: any, index: any) => {
              if (!showMore ? index < 2 : index < castArr.length) {
                return (
                  <Text>
                    {item} {index !== castArr.length && ","}
                  </Text>
                );
              }
            })}
          </View>
          <TouchableOpacity onPress={() => setShowMore(!showMore)}>
            <Text style={styles.showMore}>
              {showMore ? "Show less" : "Show more"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
