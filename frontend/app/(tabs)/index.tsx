import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

import {
  Point,
  Welcome,
  Feature,
  Guide,
  Promotion,
} from "../../components/home";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <Point />
        <Feature />
        <Guide />
        <Promotion />
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
