import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class ViewContainer extends Component {
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
    flexDirection: "column",
    flex: 1,
    height: "15%",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderTopColor: "#0f0"
  },
  inner: {
    display: "flex",
    height: "15%",
    width: "100%",
    backgroundColor: "#f0f",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    display: "flex",
    flexDirection: "row",
    height: "15%",
    width: "100%",
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ViewContainer;
