import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

import { Point, Welcome, Feature } from "../../components/home";

export default function Lokasi() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Lokasi</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
