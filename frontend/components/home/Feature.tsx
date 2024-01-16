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
              <FontAwesome5 name="truck-pickup" size={28} color="white" />
            </View>
            <Text style={styles.cardLabel}>Jemput</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <MaterialCommunityIcons name="sale" size={28} color="white" />
            </View>
            <Text style={styles.cardLabel}>Jual</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <Ionicons name="ios-people" size={28} color="white" />
            </View>
            <Text style={styles.cardLabel}>Komunitas</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <MaterialCommunityIcons
                name="dots-horizontal-circle"
                size={28}
                color="white"
              />
            </View>
            <Text style={styles.cardLabel}>Lainnya</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: "column",
  },
  wrapperFeature: {
    flexDirection: "row",
    justifyContent: "center",
  },
  gridFeature: {
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next line
    justifyContent: "space-between",
    alignItems: "flex-start", // Align items to the start of the container
    maxHeight: 420, // Set a maximum height for the grid (adjust according to your needs)
    width: "100%",
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "23%", // Set width for each card to achieve 4 columns
    aspectRatio: 1, // Ensure cards maintain a square shape
    marginBottom: 10, // Add margin between rows
    gap: 3,
  },
  cardBody: {
    backgroundColor: COLORS.greenPrimary,
    borderRadius: 50,
    width: "70%", // Adjusted width for the card body
    aspectRatio: 1, // Ensure the card body maintains a square shape
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
