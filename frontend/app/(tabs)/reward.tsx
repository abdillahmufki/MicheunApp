import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function Reward() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cardReward}>
          <View style={styles.cardRewardWrapper}>
            <View style={styles.cardRewardBody}>
              <View style={styles.cardRewardHeader}>
                <Image
                  source={require("../../assets/images/singgleLogo.png")}
                  style={styles.imageContent}
                />
                <View style={styles.headerCenterWrapper}>
                  <View style={styles.headerCenter}></View>
                </View>
                <View style={styles.bottomHeader}>
                  <Text style={styles.headerJoin}>Bergabung Sejak</Text>
                  <Text style={styles.headerJoinYear}>2024</Text>
                </View>
              </View>
              <View style={styles.heroWrapper}>
                <Text style={styles.heroWrapperText}>WASTE HERO</Text>
              </View>
              <View style={styles.heroImageWrapper}>
                <Image
                  source={require("../../assets/images/micheunKonten.png")}
                  style={styles.imageContentHero}
                />
              </View>

              <View style={styles.heroWrapperContainer}>
                <View style={styles.heroWrapperBody}>
                  <Text style={styles.heroWrapperNameLeft}>Nama</Text>
                  <Text style={styles.heroWrapperNameRight}>
                    Abdilllah Mufki
                  </Text>
                </View>
              </View>
              <View style={styles.pencapaian}>
                <Text style={styles.pencapaianText}>Pencapaian</Text>
              </View>
              <View style={styles.sampahContainer}>
                <View style={styles.sampahBody}>
                  <View style={styles.sampahContentRight}>
                    <Entypo name="trash" size={30} color={COLORS.green} />
                    <View style={styles.sampahContentLeft}>
                      <Text style={styles.sampahText}>Sampah Terkumpul</Text>
                      <Text style={styles.sampahTextNumber}>0</Text>
                    </View>
                  </View>
                  <View style={styles.sampahContentLeft}>
                    <Text style={styles.sampahText}>
                      Kg jumlah sampah yang sudah berhasil {"\n"} kamu kumpulkan
                      bersama micheun
                    </Text>
                    <View>
                      <Text style={styles.subText}>
                        1kg sampah sama dengan 1000 penyakit
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.lahanContainer}>
                <View style={styles.lahanBody}>
                  <View style={styles.lahanLeftContent}>
                    <View style={styles.iconLahanText}>
                      <Fontisto name="world" size={20} color={COLORS.green} />
                      <Text style={styles.lahanText}>
                        Lahan {"\n"} Terselamatkan
                      </Text>
                    </View>
                    <Text>0</Text>
                    <View style={styles.lahanTextWrapper}>
                      <Text style={styles.lahanTextBotHead}>
                        Kg jumlah sampah yang terurai lebih cepat
                      </Text>
                      <Text style={styles.lahanTextBot}>
                        *1 kg sampah yang di buang di tpa memerlukan satu minggu
                        untuk di olah
                      </Text>
                    </View>
                  </View>
                  <View style={styles.lahanLeftContent}>
                    <View style={styles.iconLahanText}>
                      <Fontisto name="world" size={20} color={COLORS.green} />
                      <Text style={styles.lahanText}>
                        Lahan {"\n"} Terselamatkan
                      </Text>
                    </View>
                    <Text>0</Text>
                    <View style={styles.lahanTextWrapper}>
                      <Text style={styles.lahanTextBotHead}>
                        Kg jumlah sampah yang terurai lebih cepat
                      </Text>
                      <Text style={styles.lahanTextBot}>
                        *1 kg sampah yang di buang di tpa memerlukan satu minggu
                        untuk di olah
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btnShareWrapper}>
          <TouchableOpacity style={styles.btnShare}>
            <Entypo name="share" size={24} color="white" />
            <Text style={styles.btnShareText}>Bagikan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardReward: {
    backgroundColor: COLORS.greenPrimary,
    height: 620,
    justifyContent: "center",
    borderRadius: 25,
    padding: 10,
  },
  cardRewardWrapper: {
    backgroundColor: COLORS.green,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    padding: 10,
    gap: 10,
  },
  cardRewardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  cardRewardHeader: {
    width: "100%",
    borderRadius: 25,
    padding: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  headerCenterWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
  },
  headerCenter: {
    backgroundColor: COLORS.white,
    width: 80,
    height: 25,
    borderRadius: 50,
  },
  imageContent: {
    borderRadius: 4,
    width: 30,
    height: 30,
  },
  bottomHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  headerJoin: {
    color: COLORS.white,
    fontSize: 10,
  },
  headerJoinYear: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  heroWrapper: {
    backgroundColor: COLORS.greenPrimary,
    borderRadius: 5,
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  heroWrapperText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },

  heroImageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    overflow: "hidden",
  },

  imageContentHero: {
    width: 333,
    height: 205,
    borderRadius: 5,
  },
  heroWrapperContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
    flexDirection: "row",
  },
  heroWrapperBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
    flexDirection: "row",
  },
  heroWrapperNameLeft: {
    backgroundColor: COLORS.greenPrimary,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
    width: "30%",
  },
  heroWrapperNameRight: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: COLORS.greenPrimary,
    fontSize: 12,
    fontWeight: "bold",
    width: "70%",
  },
  pencapaian: {
    backgroundColor: COLORS.greenPrimary,
    borderRadius: 5,
    width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  pencapaianText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  sampahContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 5,
    width: "100%",
  },
  sampahBody: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  sampahText: {
    color: COLORS.black,
    fontSize: 8,
    fontWeight: "bold",
  },
  sampahTextNumber: {
    color: COLORS.greenPrimary,
    fontSize: 14,
    fontWeight: "bold",
  },
  subText: {
    color: COLORS.black,
    fontSize: 8,
  },
  sampahContentRight: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  imageContentSampah: {
    width: 30,
    height: 30,
  },
  sampahContentLeft: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    overflow: "hidden",
    flexDirection: "column",
  },
  lahanContainer: {
    borderRadius: 5,

    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  lahanBody: {
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flexDirection: "row",
  },
  lahanLeftContent: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 17,
    gap: 10,
    width: "50%",
  },
  lahanRightContent: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 17,
    width: "50%",
  },
  iconLahanText: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  lahanText: {
    color: COLORS.greenPrimary,
    fontSize: 8,
    textAlign: "left",
    fontWeight: "bold",
  },
  lahanTextWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "column",
  },
  lahanTextBotHead: {
    color: COLORS.black,
    fontSize: 6,
    fontWeight: "bold",
    textAlign: "left",
  },
  lahanTextBot: {
    color: COLORS.black,
    fontSize: 6,
    textAlign: "left",
  },
  btnShareWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  btnShare: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    backgroundColor: COLORS.green,
    color: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  btnShareText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
