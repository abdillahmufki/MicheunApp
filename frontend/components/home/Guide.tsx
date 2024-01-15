import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default function Guide() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperGuide}>
        <View style={styles.wrapperGuideBody}>
          <Image
            source={require("../../assets/images/micheunKonten.png")}
            style={styles.imageContent}
          />
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
    paddingVertical: 5,
    height: 70,
    paddingHorizontal: 16,
  },
  wrapperGuideBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  imageContent: {
    width: 60,
    height: 35,
    borderRadius: 4,
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
