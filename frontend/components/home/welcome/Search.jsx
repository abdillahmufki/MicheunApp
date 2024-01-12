import { View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./welcome.style";
import { icons } from "../../../constants";

const Search = ({ searchTerm, setSearchTerm, handleClick }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="What are you looking for?"
        />
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
        <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
