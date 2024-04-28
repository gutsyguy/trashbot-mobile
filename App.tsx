import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <VideoPlayer />
      <StatusBar style="auto" />
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
