import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import GraphContainer from "./GraphContainer";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryArea
} from "victory-native";

class Weight extends Component {
  render() {
    return (
      <GraphContainer
        title={
          <Text style={{ color: "#057ec5", fontWeight: "bold" }}>WEIGHT</Text>
        }
      >
        <VictoryArea
          style={{
            data: { fill: "#057ec5" },
            parent: { padding: 0 }
          }}
          domain={{ x: [1, 5], y: [220, 280] }}
          height={150}
          data={[
            { x: 1, y: 260, y0: 0 },
            { x: 2, y: 240, y0: 0 },
            { x: 3, y: 250, y0: 0 },
            { x: 4, y: 244, y0: 0 },
            { x: 5, y: 227, y0: 0 },
            { x: 5, y: 227, y0: 0 },
            { x: 5, y: 227, y0: 0 }
          ]}
        />

        {/* <VictoryChart
          style={{
            parent: {
              backgroundColor: "#fff"
            }
          }}
          domain={{ x: [1, 5], y: [220, 280] }}
          height={150}
        >
          <VictoryArea
            style={{
              data: { fill: "#057ec5" },
              parent: { padding: 0 }
            }}
            data={[
              { x: 1, y: 260, y0: 0 },
              { x: 2, y: 240, y0: 0 },
              { x: 3, y: 250, y0: 0 },
              { x: 4, y: 244, y0: 0 },
              { x: 5, y: 227, y0: 0 },
              { x: 5, y: 227, y0: 0 },
              { x: 5, y: 227, y0: 0 }
            ]}
          />
        </VictoryChart> */}
      </GraphContainer>
    );
  }
}

export default Weight;
