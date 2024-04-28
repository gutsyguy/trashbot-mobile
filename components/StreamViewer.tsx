import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const StreamViewer = ({ streamUrl }:any) => {
  const playerHTML = `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://player.live-video.net/1.0.0/amazon-ivs-player.min.js"></script>
    </head>
    <body>
      <video id="video-player" playsInline style="width: 100%; height: 100%;"></video>
      <script>
        const MediaPlayerPackage = window.IVSPlayer;
        const PlayerState = MediaPlayerPackage.PlayerState;
        const player = MediaPlayerPackage.create();
        player.attachHTMLVideoElement(document.getElementById('video-player'));
        player.load('${streamUrl}');
        player.play();
      </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: playerHTML }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StreamViewer;
