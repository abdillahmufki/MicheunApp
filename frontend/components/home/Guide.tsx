import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default function Guide() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperGuide}>
        <View style={styles.wrapperGuideBody}>
          <Text>Gambar</Text>
          <Text style={styles.textCenterGuide}>
            Biar makin akrab, yuk baca panduan {"\n"} jual sampah dapat poin
          </Text>
          <View style={styles.guideButton}>
            <Text style={styles.guideButtonText}>Panduan</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  wrapperGuide: {
    backgroundColor: COLORS.green,
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  wrapperGuideBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  guideButton: {
    backgroundColor: COLORS.greenPrimary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    color: COLORS.white,
  },
  guideButtonText: {
    color: COLORS.white,
  },
  textCenterGuide: {
    textAlign: "left",
    fontSize: 10,
  },
});
