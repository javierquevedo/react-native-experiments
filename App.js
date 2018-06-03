import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView
} from "react-native";
import { createStackNavigator } from "react-navigation";

import MainMenu from "./App/Screens/MainMenu";
import AboutView from "./App/Screens/AboutView";

const RootStack = createStackNavigator({
  Home: {
    screen: MainMenu
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
