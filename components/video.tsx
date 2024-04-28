import React from "react";
import { ResizeMode, Video } from "expo-av";
import { StyleSheet, View } from "react-native";

const VideoPlayer = () => {
  const ivsPlayBackUrl =
    "https://2cace3ecd4fd.us-west-2.playback.live-video.net/api/video/v1/us-west-2.975050359366.channel.phP9AkCho9Eg.m3u8";

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: ivsPlayBackUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        useNativeControls
        style={styles.backgroundVideo}
        onError={(error: any) => {
          console.log("Video error:", error);
          // If there's an error object or message, log that as well
          if (error.error) {
            console.log("Detailed error:", error.error);
          }
        }}
        onLoad={(load) => console.log("Video loaded:", load)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundVideo: {
    width: "100%",
    height: "100%",
  },
});

export default VideoPlayer;
