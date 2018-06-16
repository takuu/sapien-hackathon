import React from "react";
import { StyleSheet, Text, View, NavigatorIOS } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: "Sapien Health"
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

class MyScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.inner}>
            <Text>first</Text>
          </View>
          <View style={styles.innerTwo}>
            <Text style={{ fontSize: 20 }}>second</Text>
          </View>
          <View style={styles.inner}>
            <Text>third</Text>
          </View>
        </View>
        <View style={styles.midContainer}>fooooooo</View>
        <Text style={{ fontSize: 20 }}>
          Open up App.jss to start working on your app!
        </Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inner: {
    marginTop: "23%",
    width: "33.3%",
    backgroundColor: "#fff",
    height: "40%"
  },
  innerTwo: {
    marginTop: "23%",
    width: "33.3%",
    backgroundColor: "#f0f",
    height: "40%"
  },
  topContainer: {
    height: "20%",
    width: "100%",
    backgroundColor: "#387ef5",
    flexDirection: "row",
    flex: 3
  },
  midContainer: {
    height: "40%",
    width: "100%",
    backgroundColor: "#ff0000"
  }
});
