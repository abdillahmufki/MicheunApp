import { View, Text } from "react-native";
import styles from "./welcome.style";

const UserGreeting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.UserGreetings}>
        <Text style={styles.userName}>Hello Abdillah Mufki Auzan Mubin</Text>
        <Text style={styles.welcomeMessage}>Senang bertemu kamu kembali !</Text>
      </View>
    </View>
  );
};

export default UserGreeting;
