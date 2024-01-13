import React from "react";
import { View, Text, StyleSheet } from "react-native"; // Add missing comma here
import Colors from "../../../constants/Colors";

export default function Welcome() {
  const nameData: string = "Mufki";
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hi {nameData} !</Text>
      <Text>Senang bertemu kamu kembali !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
});
