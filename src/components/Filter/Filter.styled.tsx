import { StyleSheet } from "react-native";
import { colors, size } from "../../theme";
export const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    minHeight: 40,
    marginTop: 10,
  },
  filterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:5,
  },
  filterActiveContainer: {
    borderWidth: 1,
  },
  filterText: {
    fontSize: size.font12,
    letterSpacing: 2,
    fontWeight: "700",
  },
});
