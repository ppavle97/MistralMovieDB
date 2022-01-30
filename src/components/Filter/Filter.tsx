import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Filter.styled";

type FilterProps = {
  active: string;
  setActive: any;
};

export default function SearchBar({ active, setActive }: FilterProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setActive("movies")}
        style={[
          styles.filterContainer,
          active === "movies" && styles.filterActiveContainer,
        ]}
      >
        <Text style={styles.filterText}>MOVIES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive("tvshows")}
        style={[
          styles.filterContainer,
          active === "tvshows" && styles.filterActiveContainer,
        ]}
      >
        <Text style={styles.filterText}>TV SHOWS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={active !== "searched" && true}
        style={[
          styles.filterContainer,
          active === "searched" && styles.filterActiveContainer,
        ]}
      >
        <Text style={styles.filterText}>SEARCHED</Text>
      </TouchableOpacity>
    </View>
  );
}
