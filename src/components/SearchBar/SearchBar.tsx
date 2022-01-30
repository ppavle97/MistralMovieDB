import { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import Context from "../../context/Context/Context";
import { styles } from "./SearchBar.styled";

const close = require("./assets/close.png");

type SearchBarProps = {
  type: string;
};

export default function SearchBar({ type }: SearchBarProps) {
  const [input, setInput] = useState("");
  const { searchData } = useContext(Context);

  const onChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setInput(e.nativeEvent.text);
  };
  const onSearch = () => {
    searchData(input, type);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={input}
        onChange={onChange}
      />
      {input !== "" && (
        <>
          <TouchableOpacity onPress={() => setInput("")}>
            <Image style={styles.icon} source={close} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSearch}>
            <Text style={styles.delete}>Search</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
