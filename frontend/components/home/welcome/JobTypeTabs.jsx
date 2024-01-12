import { View, Text } from "react-native";
import styles from "./welcome.style";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const JobTypeTabs = () => {
  return (
    <View style={styles.tabsContainer}>
      <View style={styles.tabList}>
        <View style={styles.featureType}>
          <View style={styles.tabListCard}>
            <FontAwesome5 name="truck-pickup" size={40} color="white" />
          </View>
          <Text style={styles.tabListText}>Jemput Sampah</Text>
        </View>
        <View style={styles.featureType}>
          <View style={styles.tabListCard}>
            <AntDesign name="scan1" size={40} color="white" />
          </View>
          <Text style={styles.tabListText}>Scan Sampah</Text>
        </View>
        <View style={styles.featureType}>
          <View style={styles.tabListCard}>
            <FontAwesome5 name="graduation-cap" size={40} color="white" />
          </View>
          <Text style={styles.tabListText}>E-Learning</Text>
        </View>
      </View>
    </View>
  );
};

export default JobTypeTabs;
