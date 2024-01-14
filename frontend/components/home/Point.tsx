import { View, Text, StyleSheet } from "react-native";
import { FONT, SIZES, SHADOWS, COLORS } from "../../constants";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Point = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topPoint}>
        <View>
          <Text style={styles.pointFont}>Micheun Point</Text>
          <Text style={styles.pointFont}>100</Text>
        </View>
        <View style={styles.refreshWrapper}>
          <EvilIcons name="refresh" size={50} color="white" />
          <Text style={styles.refreshLabel}>Refresh</Text>
        </View>
      </View>
      <View>
        <View style={styles.bottomPoint}>
          <View>
            <Text style={styles.bottomPointFont}>
              Sampah terkumpul
              <MaterialCommunityIcons
                name="check-decagram"
                size={16}
                color={COLORS.greenPrimary}
              />
            </Text>
            <Text style={styles.bottomSampah}>10 Kg</Text>
            <Text style={styles.redeemPoint}>Tukarkan Point</Text>
          </View>
          <View style={styles.bottomPointRiwayat}>
            <Text style={styles.fontHistory}>Riwayat </Text>
            <Feather name="arrow-right-circle" size={24} color="black" />
          </View>
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
    justifyContent: "center",
    borderRadius: SIZES.small,
    overflow: "hidden",
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    height: 180,
  },
  topPoint: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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
    gap: 5,
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
  fontHistory: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semibold,
    color: COLORS.black,
  },
  bottomSampah: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semibold,
    color: COLORS.black,
  },
  refreshWrapper: {
    display: "flex",
    alignItems: "center",
  },
  refreshLabel: {
    fontSize: SIZES.small,
    fontFamily: FONT.semibold,
    color: COLORS.white,
  },
  redeemPoint: {
    paddingTop: 5,
    fontSize: SIZES.small,
    fontFamily: FONT.semibold,
    display: "flex",
    alignItems: "center",
  },
});
