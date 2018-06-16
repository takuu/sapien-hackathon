import React, { Component } from "react";
import { StyleSheet, Text, View, NavigatorIOS } from "react-native";
import GraphContainer from "./GraphContainer";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryArea,
  VictoryAxis
} from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
class Steps extends Component {
  render() {
    return (
      <GraphContainer
        style={{
          height: "20%",
          width: "100%",
          backgroundColor: "#fff"
        }}
        title={
          <Text style={{ color: "#0bed85", fontWeight: "bold" }}>STEPS</Text>
        }
      >
        <VictoryBar
          style={{ data: { fill: "#0bed85" } }}
          //   standalone={false}
          height={150}
          domainPadding={0}
        />
        {/* <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material}
          height={150}
        >
          <VictoryAxis
            tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
          <VictoryBar />
        </VictoryChart> */}
      </GraphContainer>
    );
  }
}

export default Steps;
