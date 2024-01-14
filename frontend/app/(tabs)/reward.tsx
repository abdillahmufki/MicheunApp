import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

export default function Reward() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Pencapaian</Text>
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