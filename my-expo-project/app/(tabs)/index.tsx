import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import Welcome from "../../components/home/welcome/welcome";
import PointScan from "../../components/home/points/PointScan";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import { Stack, useNavigation } from "expo-router"; // Changed from useRouter to useNavigation
import { COLORS, icons, images } from "../../constants";

const TabOneScreen: React.FC = () => {
  const navigation = useNavigation(); // Changed from useRouter to useNavigation

  return (
    <>
      <Stack.Screen
        name="TabOne" // Provide a valid string name here
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension={{ width: 60, height: 60 }}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension={{ width: 100, height: 100 }}
            />
          ),
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        <Welcome />
        <PointScan />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default TabOneScreen;
