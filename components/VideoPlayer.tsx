import React from "react";
// import { ResizeMode, Video } from "expo-av";
// import Video from "react-native-video";
import { Button, StyleSheet, View } from "react-native";
// import PlayerView from "react-native-aws-ivs-player-view";
import IVSPlayer from "amazon-ivs-react-native-player";

const VideoPlayer = () => {
  const apiUrl = "http://127.0.0.1:5000/api";

  const StartVideo = async () => {
    fetch(apiUrl + "/start", { method: "POST" })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const StopVideo = async () => {
    fetch(apiUrl + "/stop", { method: "POST" })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const ivsPlayBackUrl =
    "https://2cace3ecd4fd.us-west-2.playback.live-video.net/api/video/v1/us-west-2.975050359366.channel.phP9AkCho9Eg.m3u8";

  return (
    <View style={styles.backgroundVideo}>
      <IVSPlayer style={styles.backgroundVideo} streamUrl={ivsPlayBackUrl} />
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "black",
          },
        ]}
      >
        <Button title="Start" onPress={StartVideo} />
        <Button title="Stop" onPress={StopVideo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundVideo: {
    width: 300,
    height: 300,
  },
});

export default VideoPlayer;
