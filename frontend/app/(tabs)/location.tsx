import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
  Text,
  Pressable,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { SIZES, SHADOWS } from "../../constants";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

type MarkerType = {
  id: number;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title: string;
  description: string;
};

const Lokasi = () => {
  const initialRegionState = {
    latitude: -6.914744,
    longitude: 107.60981,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [initialRegion, setInitialRegion] = useState(initialRegionState);
  const [searchLocation, setSearchLocation] = useState("");
  const mapViewRef = useRef(null);
  const [markers, setMarkers] = useState([
    {
      id: 1,
      coordinate: {
        latitude: -6.8723,
        longitude: 107.61323,
      },
      title: "Bank Sampah Bumi Inspirasi",
      description: "Sebuah komunitas yang bergerak di bidang lingkungan",
    },
    {
      id: 2,
      coordinate: {
        latitude: -6.87302,
        longitude: 107.61583,
      },
      title: "Bank Sampah Unit dabaresih (Dago Barat Resik Hejo)",
      description:
        "Jl. Dago Barat No.83, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135",
    },
    // Add more markers as needed
  ]);

  useEffect(() => {
    (async () => {
      const hasPermission = await getLocationPermission();
      if (hasPermission) {
        const currentLocation = await getCurrentPosition();
        setInitialRegion(currentLocation);
      }
    })();
  }, []);

  const getLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Please enable location services to use this feature."
        );
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error getting location permission:", error);
      Alert.alert("Location Error", "Failed to get location permission.");
      return false;
    }
  };

  const getCurrentPosition = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude, accuracy } = location.coords;
      return {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        accuracy,
      };
    } catch (error) {
      console.error("Error getting current position:", error);
      Alert.alert("Location Error", "Failed to get current location.");
      return initialRegionState;
    }
  };

  const handleSearch = async () => {
    try {
      const result = await Location.geocodeAsync(searchLocation);
      if (result.length > 0) {
        const { latitude, longitude } = result[0];
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        animateToRegion({ latitude, longitude });
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };

  const animateToRegion = (region: any) => {
    if (mapViewRef.current) {
      (mapViewRef.current as any)?.animateToRegion(region, 1000);
    }
  };

  const handleDirections = (marker: MarkerType) => {
    const destination = `${marker.coordinate.latitude},${marker.coordinate.longitude}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    Linking.canOpenURL(googleMapsUrl).then((supported) => {
      if (supported) {
        Linking.openURL(googleMapsUrl);
      } else {
        console.error("Could not open Google Maps");
      }
    });
  };

  const showAlert = (marker: MarkerType) => {
    Alert.alert(
      "Directions",
      "Do you want to get directions to the destination?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Get Directions",
          onPress: () => handleDirections(marker),
        },
      ],
      {
        cancelable: false,
        onDismiss: () => {
          console.log("Alert dismissed");
        },
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <Entypo name="location-pin" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Masukkan Kecamatan/Kelurahan"
            placeholderTextColor="#808080"
            value={searchLocation}
            onChangeText={(text) => setSearchLocation(text)}
          />
          <TouchableOpacity style={styles.buttonSearch} onPress={handleSearch}>
            <FontAwesome name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.homeButton}>
          <Pressable style={styles.buttonSearch}>
            <Link href="/">
              <Entypo name="home" size={20} color="black" />
            </Link>
          </Pressable>
        </View>
      </View>
      <MapView
        ref={mapViewRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
        followsUserLocation={true}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={() => showAlert(marker)}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  inputWrapper: {
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  searchInput: {
    flex: 1,
    height: 40,
    padding: 10,
    ...SHADOWS.medium,
  },
  buttonSearch: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  homeButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Lokasi;
