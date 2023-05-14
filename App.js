import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import Router from "./src/navigation/StackNavigator";

import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import colors from "./colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.lightPink} style="dark" />
      <PaperProvider>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          source={require("./assets/Background.jpg")}
        >
          <Router />
        </ImageBackground>
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
AppRegistry.registerComponent(appName, () => Main);
