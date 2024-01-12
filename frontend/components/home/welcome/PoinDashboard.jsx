import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
export default function PoinDashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.topPoint}>
        <View style={styles.wrapperPoint}>
          <Text style={styles.point}>
            <FontAwesome5 name="coins" size={24} color="white" />
            1000 Point
          </Text>
          <Text style={styles.detail}>View Detail</Text>
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 5 }}>
          <Feather name="refresh-ccw" size={30} color="white" />
          <Text style={{ color: "#fff" }}>Refresh</Text>
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 5 }}>
          <AntDesign name="swap" size={30} color="white" />
          <Text style={{ color: "#fff" }}>Tukar Coin</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topPoint: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007F5F",
    height: 100,
    padding: 15,
    borderRadius: 10,
  },

  point: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  detail: {
    fontSize: 15,
    color: "white",
  },
  wrapperPoint: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
