import { Image, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logoHeader.png")}
        // style={styles.logo}
      />
      <FontAwesome name="whatsapp" size={30} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 150,
    justifyContent: "space-between",
  },
});
