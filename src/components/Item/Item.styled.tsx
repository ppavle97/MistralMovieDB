import { StyleSheet } from "react-native";
import { colors, size } from "../../theme";
export const styles = StyleSheet.create({
  container: {
    width: "95%",
    minHeight: 110,
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  cover: {
    flexBasis: "20%",
    resizeMode: "contain",
  },
  info: {
    flexBasis: "77%",
    justifyContent: "center",
    paddingLeft: 10,
  },
  title: {
    fontSize: size.font14,
    fontWeight: "300",
  },
  next: {
    flexBasis: "3%",
    justifyContent: "center",
    alignSelf: "center",
  },
  icons: {
    width: 12,
    height: 12,
  },
  rank: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rankValue: {
    fontSize: size.font14,
    fontWeight: "300",
    color: colors.grey,
    marginLeft: 5,
  },
});
