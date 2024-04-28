import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json"; // Import the app name from app.json

AppRegistry.registerComponent(appName, () => App);
