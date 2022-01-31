import { StyleSheet, TabBarIOSItem } from "react-native";
import { colors, metrics, size } from "../../theme";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rank: {
    width: "100%",
    height: metrics.screenHeight / 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkSilver,
  },
  rankValue: {
    fontSize: size.font60,
    fontWeight: "600",
    color: colors.white,
  },
  main: {
    width: "100%",
    minHeight: 300,
  },
  mainTop: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    marginTop: -50,
  },
  movieImage: {
    flexBasis: "40%",
    resizeMode: "contain",
  },
  descriptionContainer: {
    flexBasis: "60%",
    justifyContent: "flex-end",
  },
  descriptionText: {
    fontSize: size.font14,
    color: colors.grey,
  },
  icons: {
    width: 17,
    height: 17,
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rateValue: {
    fontSize: size.font16,
    fontWeight: "600",
    color: colors.grey,
    marginLeft: 5,
  },
  rateNumber: {
    fontSize: size.font10,
    fontWeight: "300",
    color: colors.darkSilver,
    marginLeft: 10,
  },
  title: {
    fontSize: size.font20,
    color: colors.grey,
    fontWeight: "700",
    marginTop: 35,
    textAlign: "center",
  },
  year: {
    fontSize: size.font20,
    color: colors.darkSilver,
    fontWeight: "800",
    marginTop: 5,
    textAlign: "center",
  },
  castContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  castTitle: {
    fontSize: size.font18,
    fontWeight: "500",
    marginBottom: 10,
  },
  castItem: {
    fontSize: size.font16,
  },
  castNames: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  showMore: {
    color: "blue",
  },
});
