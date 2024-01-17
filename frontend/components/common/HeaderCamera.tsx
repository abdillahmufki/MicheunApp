import { View, StyleSheet, Pressable, Text, SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function HeaderCamera() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.Pressable}>
        <Entypo name="flash" size={16} color="white" />
      </Pressable>
      <Pressable style={styles.Pressable}>
        <Link href="/">
          <Entypo name="home" size={16} color="white" />
        </Link>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 250,
    justifyContent: "space-between",
    backgroundColor: "#000",
    padding: 2,
  },
  Pressable: {
    padding: 3,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
  },
});
