import React, { useEffect } from "react";
import {
  View,
  Button,
  NativeModules,
  NativeEventEmitter,
  Platform,
  PermissionsAndroid,
} from "react-native";
import BleManager from "react-native-ble-manager";
import { PiMacKey } from "../lib/global";

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const App = () => {
  useEffect(() => {
    BleManager.start({ showAlert: false });

    if (Platform.OS === "android" && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then((result) => {
        if (result) {
          console.log("Permission is OK");
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          ).then((result) => {
            if (result) {
              console.log("User accept");
            } else {
              console.log("User refuse");
            }
          });
        }
      });
    }
  }, []);

  const dataSend = async (data: string) => {
    try {
      await BleManager.connect(PiMacKey);
      await BleManager.write("serviceUUID", "characteristicUUID", data, [1, 0]);
      console.log("Data sent");
    } catch (error) {
      console.error("Error connecting and sending data to Pi", error);
    }
  };
  return (
    <View>
      <Button title="Send Data to Pi" onPress={() => dataSend("forward")} />
      <Button title="Send Data to Pi" onPress={() => dataSend("backward")} />
      <Button title="Send Data to Pi" onPress={() => dataSend("pickup")} />
    </View>
  );
};

export default App;
