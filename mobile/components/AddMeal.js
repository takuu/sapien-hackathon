import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity
} from "react-native";
import ViewContainer from "./ViewContainer";

class AddMeal extends Component {
  render() {
    return (
      <ViewContainer
        title={
          <Text style={{ color: "#80368d", fontWeight: "bold" }}>
            ADD A MEAL
          </Text>
        }
      >
        <View
          style={{
            flexDirection: "row",
            // flex: 1,
            // display: "flex",
            // height: "25%",
            width: "100%",
            backgroundColor: "#fff"
          }}
          id="five-vertical-bars"
        >
          <View
            style={{
              width: "20%",
              display: "flex",
              backgroundColor: "#fff",
              padding: 5
            }}
            id="meal-one"
          >
            <TouchableOpacity
              onPress={() => {
                this.props.onAddMeal(1);
              }}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>1</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "20%",
              display: "flex",
              backgroundColor: "#fff",
              padding: 5
            }}
            id="meal-two"
          >
            <TouchableOpacity
              onPress={() => {
                this.props.onAddMeal(2);
              }}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "20%",
              display: "flex",
              backgroundColor: "#fff",
              padding: 5
            }}
            id="meal-three"
          >
            <TouchableOpacity
              onPress={() => {
                this.props.onAddMeal(3);
              }}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "20%",
              display: "flex",
              backgroundColor: "#fff",
              padding: 5
            }}
            id="meal-four"
          >
            <TouchableOpacity
              onPress={() => {
                this.props.onAddMeal(4);
              }}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "20%",
              display: "flex",
              backgroundColor: "#fff",
              padding: 5
            }}
            id="meal-five"
          >
            <TouchableOpacity
              onPress={() => {
                this.props.onAddMeal(5);
              }}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>5</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#80368d",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
    flex: 1,
    height: "50%",
    flexDirection: "column",
    paddingTop: 20,
    paddingRight: 5,
    paddingBottom: 20,
    paddingLeft: 5
  },
  button: {
    color: "#fff",
    fontSize: 28,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default AddMeal;
