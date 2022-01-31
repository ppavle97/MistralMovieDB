import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { useEffect, useContext, useState } from "react";
import { styles } from "./Details.styled";
import Context from "../../context/Context/Context";

const star = require("./assets/star.png");

type Props = NativeStackScreenProps<RootStackParamList, "Movies">;

export const Details = ({ route, navigation: { setOptions } }: Props) => {
  const { selectedItem } = useContext(Context);
  const [showMore, setShowMore] = useState(false);
  const { title, year, image, imDbRatingCount, imDbRating, rank, crew } =
    selectedItem;

  useEffect(() => {
    setOptions({
      title: route.params.title,
    });
  }, []);

  const castArr = crew.split(",");

  const crewRender = (showMore: boolean) => {
    let indexSecondComma = crew.split(",", 2).join(",").length;
    return crew.slice(0, !showMore ? indexSecondComma : crew.length);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rank}>
        <Text style={styles.rankValue}>{rank}</Text>
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
              CANNOT FIND DESCRIPTION IN APIs!
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
            <Text>{crewRender(showMore)}</Text>
          </View>

          {castArr.length > 2 && (
            <TouchableOpacity onPress={() => setShowMore(!showMore)}>
              <Text style={styles.showMore}>
                {showMore ? "Show less" : "Show more"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
