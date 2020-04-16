import React from "react";
import { View, Text, Dimensions } from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";
import { Colors } from "react-native-paper";

export default function Prediction({dates,cases}) {
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
        Prediction For New Cases Next 5 Days
      </Text>
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: cases,
            },
          ],
        }}
        width={Dimensions.get("window").width - 75} // from react-native
        height={250}
        onDataPointClick={(val) => alert(val.value)}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 10,
          },
          propsForDots: {
            r: "7",
            strokeWidth: "4",
            stroke: "#ffa726",
            
          },
        }}
        bezier
        
        style={{
          marginVertical: 8,
          borderRadius: 16,
          flex: 1,
        }}
      />
    </View>
  );
}
