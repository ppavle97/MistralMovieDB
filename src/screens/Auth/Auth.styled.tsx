import { StyleSheet } from "react-native";
import { colors, size } from "../../theme";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: size.font16,
    fontWeight: "700",
    letterSpacing: 3,
    marginTop: 20,
  },
  email: {
    fontSize: size.font14,
    fontWeight: "400",
    color: colors.darkSilver,
  },
  userImage: {
    width: 100,
    height: 100,
  },
});
