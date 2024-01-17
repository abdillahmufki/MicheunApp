import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, useNavigation } from "expo-router";
import { Alert, Pressable, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { COLORS, FONT, SHADOWS } from "../../constants";

import Header from "../../components/common/header/Header";
import HeaderCamera from "../../components/common/HeaderCamera";
// import LogoTitle from "../../components/common/header/LogoTitle"; // Add missing import

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const navigation = useNavigation(); // Move useNavigation hook to the top level

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4942E4",
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: {
          backgroundColor: COLORS.greenPrimary,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          paddingTop: 10,
          height: 100,
          paddingBottom: 30,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontFamily: FONT.regular,
          fontSize: 12,
        },
        headerTitleStyle: {
          fontFamily: FONT.regular,
          fontSize: 18,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: "#fff",
            height: 110,
          },

          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reward"
        options={{
          title: "Pencapaian",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="medal" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          headerTitle: () => <HeaderCamera />,
          title: "Scan Sampah",
          headerStyle: {
            backgroundColor: "#000",
            height: 100,
          },
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "absolute",
                backgroundColor: COLORS.white,
                borderRadius: 50,
                ...SHADOWS.medium,
                bottom: 20,
                padding: 5,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: COLORS.green,
                }}>
                <Ionicons name="scan" size={30} color={color} />
              </View>
            </View>
          ),

          tabBarStyle: {
            display: "none",
          },
        }}
      />

      <Tabs.Screen
        name="location"
        options={{
          title: "Lokasi",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="location-pin" size={24} color={color} />
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
