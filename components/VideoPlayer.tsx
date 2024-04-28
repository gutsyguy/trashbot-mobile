import React from "react";
import { ResizeMode, Video } from "expo-av";
import { Button, StyleSheet, View } from "react-native";
import PlayerView from "react-native-aws-ivs-player-view";

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
    <View style={styles.container}>
      <Video
        source={{ uri: ivsPlayBackUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        isLooping
        useNativeControls
        // bufferConfig={{
        //   minBufferMs: 15000,      // Minimum amount of content that the player will attempt to buffer before playing
        //   maxBufferMs: 50000,      // Maximum amount of content that the player will buffer
        //   bufferForPlaybackMs: 2500,  // Amount of content that must be buffered for playback to start or resume following a user action
        //   bufferForPlaybackAfterRebufferMs: 5000,  // Amount of content that must be buffered for playback to resume after a rebuffer
        // }}
        style={styles.backgroundVideo}
        onError={(error: any) => {
          console.log("Video error:", error);
          if (error.error) {
            console.log("Detailed error:", error.error);
          }
        }}
        onLoad={(load) => console.log("Video loaded:", load)}
      />

      <PlayerView
        style={styles.backgroundVideo}
        ref={(e: any) => {
          // @ts-ignore
          this.player = e;
        }}
        maxBufferTimeSeconds={0}
        rebufferToLive={false}
      />
      <Button
        onPress={() => {
          // @ts-ignore
          this.player.pause();
        }}
        title="Pause"
      />
      <Button
        onPress={() => {
          // @ts-ignore
          this.player.load("<SOME_HLS_URL>");
        }}
        title="Play Me"
      />

      <View style={[{ flexDirection: "row", backgroundColor: "black" }]}>
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
    width: 50,
    height: 50,
  },
});

export default VideoPlayer;
