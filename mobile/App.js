import React from "react";
import { StyleSheet, Text, View, ScrollView, NavigatorIOS } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryArea
} from "victory-native";

import ViewContainer from "./components/ViewContainer";
import MealScore from "./components/MealScore";
import Weight from "./components/Weight";
import Steps from "./components/Steps";
import AddMeal from "./components/AddMeal";
import Bottom from "./components/Bottom";

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: "Sapien Health"
        }}
        barTintColor="#065ba7"
        titleTextColor="#fff"
        style={{ flex: 1 }}
      />
    );
  }
}
// 23
class MyScene extends React.Component {
  state = { mealTotal: 21 };
  onAddMeal = num => {
    this.setState({
      mealTotal: this.state.mealTotal + num
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <MealScore score={this.state.mealTotal} />
          <Weight />
          <Steps />
          <AddMeal onAddMeal={this.onAddMeal} />
          <Bottom />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    // marginTop: "23%",
    alignItems: "center",
    justifyContent: "center"
  }
});
