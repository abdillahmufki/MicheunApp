import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SIZES, FONT } from "../../constants";
export default function Promotion() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperText}>
          <Text style={styles.headingText}>Hidup sehat dan bersih</Text>
          <Text>Jembatan Terbaik antara Anda dan Lingkungan Bersih!</Text>
        </View>

        <Image
          source={require("../../assets/images/micheunBanner.png")}
          style={styles.imagePromotion}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 20,
  },
  wrapperContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    borderRadius: 10,
  },
  wrapperText: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },
  headingText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  imagePromotion: {
    width: "100%",
    height: 200,
    borderRadius: 14,
  },
});
