import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, Dashboard, Search } from "../components";
import History from "../screens/History";

const Home = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const router = useRouter();
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
      {/* <View
        style={{
          paddingHorizontal: SIZES.medium,
        }}>
        <Search />
      </View> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            backgroundColor: COLORS.lightWhite,
          }}>
          <Dashboard />
        </View>
      </ScrollView>

      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="History"
            component={History}
            options={{ headerShown: false }}
          />
          {/* Add more screens for additional tabs */}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Home;
