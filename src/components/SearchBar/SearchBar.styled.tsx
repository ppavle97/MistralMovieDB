import { StyleSheet } from "react-native";
import { colors, size } from "../../theme";
export const styles = StyleSheet.create({
  container: {
    width: "95%",
    minHeight: 40,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    flexBasis: "75%",
    borderBottomWidth: 1,
    borderColor: colors.darkSilver,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  delete: {
    color: colors.blue,
    fontWeight: "500",
    letterSpacing: 1,
    fontSize: size.font12,
  },
  icon: {
    width: 12,
    height: 12,
    marginHorizontal: 10,
  },
});
