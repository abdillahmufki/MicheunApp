import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/logoHeader.png")} />
      <TouchableOpacity>
        <FontAwesome name="whatsapp" size={30} color="green" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 200,
    justifyContent: "space-between",
  },
});
