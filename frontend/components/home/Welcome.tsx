import { View, Text, StyleSheet } from "react-native";
import { FONT } from "../../constants";

export default function Welcome() {
  const name = "Abdillah Mufki";
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hi, {name}</Text>
      <Text style={styles.welcome}>Senang bertemu kamu kembali !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "column",
  },
  name: {
    fontSize: 26,
    fontFamily: FONT.bold,
  },
  welcome: {
    fontSize: 16,
    color: "gray",
    fontFamily: FONT.medium,
  },
});
