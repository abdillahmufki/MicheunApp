import React, { useState, useRef } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

export default function CameraComponent() {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null); // Add type annotation to cameraRef

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo); // You can handle the captured photo here
    }
  };

  if (hasPermission && hasPermission.status !== "granted") {
    // Request permission if not already granted
    return <Button title="Allow Camera Access" onPress={requestPermission} />;
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Ionicons name="camera-reverse-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Ionicons name="camera" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between", // Add this to space out the buttons
    margin: 20,
  },
  button: {
    flex: 0.45,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "black",
    opacity: 0.5,
    padding: 10,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
