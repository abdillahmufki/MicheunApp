import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS } from "../../constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Feature() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperFeature}>
        <View style={styles.gridFeature}>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <FontAwesome5 name="truck-pickup" size={35} color="white" />
            </View>
            <Text style={styles.cardLabel}>Jemput Sampah</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <MaterialCommunityIcons name="sale" size={35} color="white" />
            </View>
            <Text style={styles.cardLabel}>Jual Sampah</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <Ionicons name="ios-people" size={35} color="white" />
            </View>
            <Text style={styles.cardLabel}>Komunitas</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    flexDirection: "column",
  },
  wrapperFeature: {
    flexDirection: "row",
    justifyContent: "center",
  },
  gridFeature: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    gap: 10,
  },
  cardBody: {
    backgroundColor: COLORS.greenPrimary,
    borderRadius: 50,
    padding: 10,
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.small,
  },
  cardLabel: {
    fontFamily: FONT.medium,
    fontSize: 12,
    textAlign: "center",
  },
});
