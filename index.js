/**
 * @format
 */

import { AppRegistry } from "react-native";
import Root from "app/src/Root";
import { name as appName } from "app/app.json";

AppRegistry.registerComponent(appName, () => Root);

console.disableYellowBox = true;
