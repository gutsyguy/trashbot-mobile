import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import VideoPlayer from "./components/VideoPlayer";
import StreamViewer from "./components/StreamViewer";

export default function App() {
  return (
    <View style={styles.container}>
      <VideoPlayer />
      <StatusBar style="auto" />
      {/* <Button title="Start" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
