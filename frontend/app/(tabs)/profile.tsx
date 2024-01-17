import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { SIZES, COLORS, FONT } from "../../constants";
import { Entypo, Fontisto, FontAwesome5 } from "@expo/vector-icons";

const AboutMicheunItem = ({
  icon,
  title,
  content,
}: {
  icon: JSX.Element;
  title: string;
  content: string;
}) => (
  <View style={styles.aboutMicheunMain}>
    {icon}
    <View style={styles.stylesTitleText}>
      <Text style={styles.micheunMainTextTitle}>{title}</Text>
      <Text style={styles.micheunMainText}>{content}</Text>
    </View>
  </View>
);

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.dataWrapper}>
          <View>
            <Text>Abdillah Mufki</Text>
          </View>
          <View>
            <Text>081394754867</Text>
            <Text>abdillahmufky121@gmail.com</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.btnChangePassword}>Ganti Password?</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.aboutMicheunTitle}>Tentang Micheun</Text>
          </View>
        </View>
        <View style={styles.aboutMicheunContainer}>
          <View>
            <View style={styles.aboutMicheunMain}>
              <Image
                style={styles.imageLogo}
                source={require("../../assets/images/singgleLogo.png")}
              />
              <Text style={styles.micheunMainText}>
                Micheun adalah teman setia Anda dalam menjalani gaya hidup ramah
                lingkungan. Dengan Micheun, Anda tidak hanya menggunakan
                aplikasi, tetapi juga menjadi bagian dari perubahan positif
                untuk Bumi kita.
              </Text>
            </View>
            <AboutMicheunItem
              icon={<Entypo name="map" size={25} color={COLORS.greenPrimary} />}
              title="Alamat"
              content="Jl. Dago biru no. 125, Bandung, Jawa Barat, Indonesia"
            />
            <AboutMicheunItem
              icon={
                <Entypo name="phone" size={25} color={COLORS.greenPrimary} />
              }
              title="No Hp"
              content="021 - 12345678910"
            />
            <AboutMicheunItem
              icon={
                <Fontisto name="email" size={25} color={COLORS.greenPrimary} />
              }
              title="Email"
              content="info@micheun.id"
            />
            <AboutMicheunItem
              icon={
                <FontAwesome5
                  name="globe"
                  size={25}
                  color={COLORS.greenPrimary}
                />
              }
              title="Website"
              content="https://micheun.id"
            />
            <View style={styles.wrapperTitle}>
              <Text style={styles.aboutMicheunTitle}>Info lainnya</Text>
            </View>
          </View>
        </View>
        <View style={styles.otherAboutWrapper}>
          <AboutMicheunItem
            icon={
              <Fontisto
                name="mobile-alt"
                size={25}
                color={COLORS.greenPrimary}
              />
            }
            title="Versi Aplikasi"
            content="1.0"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.greenPrimary,
    paddingBottom: 20,
    marginBottom: 20,
    gap: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  btnChangePassword: {
    color: "red",
  },
  aboutMicheunTitle: {
    color: COLORS.greenPrimary,
    fontSize: SIZES.medium,
  },
  aboutMicheunContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.greenPrimary,
    marginBottom: 20,
  },
  aboutMicheunMain: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
    gap: 15,
    alignItems: "center",
  },
  imageLogo: {
    width: 25,
    height: 25,
  },
  micheunMainText: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: SIZES.small,
    textAlign: "left",
  },
  stylesTitleText: {
    flex: 1,
  },
  micheunMainTextTitle: {
    color: COLORS.secondary,
    fontFamily: FONT.semibold,
    fontSize: 13,
  },
  wrapperTitle: {
    padding: 15,
  },
  otherAboutWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.greenPrimary,
    marginBottom: 20,
  },
});
