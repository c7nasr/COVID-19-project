import React from "react";
import { View, Text, Dimensions } from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";
import { Colors } from "react-native-paper";

export default function PredictionDeaths({dates,death}) {
  return (
    <View
      style={{
        marginHorizontal: 20,
        backgroundColor: "white",
        padding: 15,
        marginVertical: 10,
        elevation: 1,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 18, marginVertical: 10, fontWeight: "500",color:Colors.grey700 }}>
        Prediction For Death Next 5 Days
      </Text>
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: death,
            },
          ],
        }}
        width={Dimensions.get("screen").width - 70} // from react-native
        height={250}
        onDataPointClick={(val) => alert(val.value)}
        chartConfig={{
          backgroundColor: "#f9f9f9",
          backgroundGradientFrom: Colors.red400,
          backgroundGradientTo: Colors.red800,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => Colors.amber200,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 10,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "4",
            stroke: Colors.amber700,
            
          },
        }}
        bezier
        
        style={{
          marginVertical: 8,
          borderRadius: 10,
          flex: 1,
    

        }}
      />
    </View>
  );
}
