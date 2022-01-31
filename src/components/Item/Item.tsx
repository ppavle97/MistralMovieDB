import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Item.styled";

const arrow = require("./assets/arrow.png");
const star = require("./assets/star.png");

interface ItemProps {
  data: any;
  rank: number;
  onPress: any;
  searched?: boolean;
}

export default function Item({ data, rank, onPress, searched }: ItemProps) {
  let { image, fullTitle, imDbRating, title } = data;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={searched}
    >
      <>
        <Image
          style={styles.cover}
          source={{
            uri: image,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.title}>
            {rank + 1}. {searched ? title : fullTitle}
          </Text>
          {!searched && (
            <>
              <View style={styles.rank}>
                <Image style={styles.icons} source={star} />
                <Text style={styles.rankValue}>{imDbRating}</Text>
              </View>
              <View style={styles.rank}>
                <Image style={styles.icons} source={star} />
                <Text style={styles.rankValue}>{imDbRating}</Text>
              </View>
            </>
          )}
        </View>
        {!searched && (
          <View style={styles.next}>
            <Image style={styles.icons} source={arrow} />
          </View>
        )}
      </>
    </TouchableOpacity>
  );
}
