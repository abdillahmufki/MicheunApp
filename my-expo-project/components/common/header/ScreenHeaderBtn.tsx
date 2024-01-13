import React from "react";
import {
  Image,
  TouchableOpacity,
  ImageStyle,
  ViewStyle,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";

interface Styles {
  btnContainer: ViewStyle;
  btnImg: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: {
    borderRadius: SIZES.xLarge / 1.25,
  },
});

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: { width: number; height: number };
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={[
          styles.btnImg,
          { width: dimension.width, height: dimension.height },
        ]}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
