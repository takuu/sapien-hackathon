import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class GraphContainer extends Component {
  render() {
    const { title, viewProps } = this.props;
    return (
      <View style={styles.container}>
        {this.props.children}
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flexDirection: "column",
    // flex: 1,
    height: "29%",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderTopColor: "#0f0"
  },
  title: {
    display: "flex",
    flexDirection: "row",
    // height: "15%",
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GraphContainer;
