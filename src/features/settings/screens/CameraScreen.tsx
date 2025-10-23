import AsyncStorage from "@react-native-async-storage/async-storage";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useAuth } from "../../../services/auth/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const { user } = useAuth();
  const navigation = useNavigation();
  const cameraRef = useRef<CameraView>(null);

  if (!permission) return <View />;
  if (!permission.granted)
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );

  async function takePicture() {
    if (cameraRef.current) {
      const result = await cameraRef.current.takePictureAsync();
      console.log("📸 Photo captured:", result.uri);
      await AsyncStorage.setItem(`${user!.uid}-photo`, result.uri);
      setPhotoUri(result.uri);
      navigation.goBack();
    }
  }

  function toggleCameraFacing() {
    setFacing((cur) => (cur === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      {photoUri ? (
        <View style={styles.preview}>
          <Image source={{ uri: photoUri }} style={styles.image} />
          <TouchableOpacity
            onPress={() => setPhotoUri(null)}
            style={styles.button}
          >
            <Text style={styles.text}>Retake</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.text}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Snap</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  message: { textAlign: "center", paddingBottom: 10 },
  camera: { flex: 1, justifyContent: "flex-end" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingVertical: 20,
  },
  button: { alignItems: "center" },
  text: { fontSize: 18, color: "#fff" },
  preview: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: "80%", borderRadius: 10 },
});
