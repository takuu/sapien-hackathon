import React, { Component } from "react";
import {
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from "react-native";
import ViewContainer from "./ViewContainer";

class MealScore extends Component {
  render() {
    const { score } = this.props;
    return (
      <ViewContainer title="">
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            height: "20%",
            width: "100%",
            backgroundColor: "#fff"
          }}
          id="five-vertical-bars"
        >
          <View style={styles.circleContainer} id="meal-one">
            <TouchableHighlight
              style={{
                borderRadius:
                  Math.round(
                    Dimensions.get("window").width +
                      Dimensions.get("window").height
                  ) / 5,
                width: Dimensions.get("window").width * 0.2,
                height: Dimensions.get("window").width * 0.2,
                backgroundColor: "#02c8e6",
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center"
              }}
              underlayColor="#ccc"
              onPress={() => alert("Yaay!")}
            >
              <Text style={{ color: "#fff" }}> 94 mg/dl</Text>
            </TouchableHighlight>
            <Text
              style={{ fontSize: 12, color: "#02c8e6", fontWeight: "bold" }}
            >
              BLOOD GLUCOSE
            </Text>
          </View>
          <View style={styles.circleContainer} id="meal-two">
            <TouchableHighlight
              style={{
                borderRadius:
                  Math.round(
                    Dimensions.get("window").width +
                      Dimensions.get("window").height
                  ) / 4,
                width: Dimensions.get("window").width * 0.25,
                height: Dimensions.get("window").width * 0.25,
                backgroundColor: "#02c8e6",

                justifyContent: "center",
                alignItems: "center"
              }}
              underlayColor="#ccc"
              onPress={() => alert("Yaay!")}
            >
              <Text style={{ color: "#fff" }}> {score}/32</Text>
            </TouchableHighlight>
            <Text
              style={{ fontSize: 12, color: "#02c8e6", fontWeight: "bold" }}
            >
              WEEKLY MEAL SCORE
            </Text>
          </View>
          <View style={styles.circleContainer} id="meal-three">
            <TouchableHighlight
              style={{
                borderRadius:
                  Math.round(
                    Dimensions.get("window").width +
                      Dimensions.get("window").height
                  ) / 5,
                width: Dimensions.get("window").width * 0.2,
                height: Dimensions.get("window").width * 0.2,
                marginTop: 10,
                backgroundColor: "#02c8e6",

                justifyContent: "center",
                alignItems: "center"
              }}
              underlayColor="#ccc"
              onPress={() => alert("Yaay!")}
            >
              <Text style={{ color: "#fff" }}> 12 lbs </Text>
            </TouchableHighlight>
            <Text
              style={{ fontSize: 12, color: "#02c8e6", fontWeight: "bold" }}
            >
              POUNDS LOST
            </Text>
          </View>
        </View>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  circleContainer: {
    width: "33.3%",
    display: "flex",
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 5,
    paddingLeft: 20
  }
});

export default MealScore;
