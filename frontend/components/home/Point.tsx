import { View, Text, StyleSheet } from "react-native";
import { FONT, SIZES, SHADOWS, COLORS } from "../../constants";
import { Feather } from "@expo/vector-icons";

const Point = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topPoint}>
        <Text style={styles.pointFont}>Micheun Point</Text>
        <Text style={styles.pointFont}>100</Text>
      </View>
      <View style={styles.bottomPoint}>
        <View>
          <Text style={styles.bottomPointFont}>Sampah terkumpul</Text>
          <Text style={styles.bottomSampah}>10 Kg</Text>
        </View>
        <View style={styles.bottomPointRiwayat}>
          <Text>Riwayat </Text>
          <Feather name="arrow-right-circle" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Point;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
    borderRadius: SIZES.small,
    overflow: "hidden",
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    height: 180,
  },
  topPoint: {
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: COLORS.greenPrimary,
    borderTopLeftRadius: SIZES.small, // Add circular border to top-left corner
    gap: 5,
    display: "flex",

    borderBottomStartRadius: SIZES.small,
    paddingHorizontal: SIZES.medium,
    height: 100,
    borderTopRightRadius: SIZES.small, // Add circular border to top-right corner
  },
  pointFont: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semibold,
    color: COLORS.white,
  },
  bottomPoint: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    color: COLORS.greenPrimary,
    borderBottomEndRadius: SIZES.small,
    borderBottomStartRadius: SIZES.small,
    paddingHorizontal: SIZES.medium,
    height: 80,
  },
  bottomPointFont: {
    fontSize: SIZES.medium,
    display: "flex",
    fontFamily: FONT.semibold,
    color: COLORS.greenPrimary,
  },
  bottomPointRiwayat: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semibold,
    color: COLORS.greenPrimary,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bottomSampah: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semibold,
    color: COLORS.black,
  },
});
