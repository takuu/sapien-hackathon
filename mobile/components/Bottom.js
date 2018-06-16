import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

class Bottom extends Component {
  render() {
    return (
      <View
        style={{
          height: "10%",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity title="START A CALL">
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>ADD GLUCOSE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          title="START A CALL"
          onPress={() => {
            this.props.onJoin();
          }}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>START A CALL</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#bf4487",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    justifyContent: "center",
    flex: 1,
    height: "10%",
    flexDirection: "column",
    paddingTop: 1,
    paddingRight: 10,
    paddingBottom: 1,
    paddingLeft: 10
  },
  button: {
    color: "#fff",
    fontSize: 14,
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default Bottom;
