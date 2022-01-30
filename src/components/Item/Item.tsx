import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Item.styled";

const arrow = require("./assets/arrow.png");
const star = require("./assets/star.png");

interface ItemProps {
  data: any;
  rank: number;
  onPress: () => {};
}

export default function Item({ data, rank, onPress }: ItemProps) {
  let {image, fullTitle, imDbRating } = data;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <>
        <Image
          style={styles.cover}
          source={{
            uri: image,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.title}>
            {rank + 1}. {fullTitle}
          </Text>
          <View style={styles.rank}>
            <Image style={styles.icons} source={star} />
            <Text style={styles.rankValue}>{imDbRating}</Text>
          </View>
        </View>
        <View style={styles.next}>
          <Image style={styles.icons} source={arrow} />
        </View>
      </>
    </TouchableOpacity>
  );
}
