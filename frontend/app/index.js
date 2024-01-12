import { useState } from "react";
import { View, ScrollView, Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  Dashboard,
  Search,
} from "../components";

const Home = () => {
  const router = new useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              onPress={() => {
                router.navigate("Profile");
              }}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              onPress={() => {
                router.navigate("Profile");
              }}
            />
          ),
          headerTitle: "",
        }}
      />
      <View
        style={{
          paddingHorizontal: SIZES.medium,
        }}
      >
        <Search />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            backgroundColor: COLORS.lightWhite,
          }}
        >
          <Welcome />

          <Dashboard />
        </View>
      </ScrollView>

      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
          backgroundColor: COLORS.lightWhite,
        }}
      >
        <Text>bottom navigation</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
