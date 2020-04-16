import React, { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Colors } from "react-native-paper";
import { List } from 'react-native-paper';
import { connect } from "react-redux";
import NewCasesList from "../components/NewCasesList.js";
import { ScrollView } from "react-native-gesture-handler";
 const HistoricalData = ({dates,past}) => {

  return (
    <ScrollView>

    <View style={{ backgroundColor: "white" }}>
     

      <View style={{ backgroundColor: "white", }}>
     
      </View>

      <Text style={{ fontSize: 24, margin: 10 }}>
        Some Interesting Information
      </Text>
      <List.Section>
        <List.Item
          title="Patient Zero"
          description={dates.pandemicStartAtDate+" - " + dates.pandemicStartAtDays+" Day From Now"}
          left={() => <List.Icon icon="numeric-0-circle-outline" color={Colors.blue600} />}
       />
        <List.Item
          title="First Death"
          description={dates.FirstDeathAndRecover+" - " + dates.FirstDeathAndRecoverAtDays+" Day From Now"}
          left={() => <List.Icon icon="flower-outline" color={Colors.blue600} />}
       />
         <List.Item
          title="First Recovered"
          description={dates.FirstDeathAndRecover+" - " + dates.FirstDeathAndRecoverAtDays+" Day From Now"}
          left={() => <List.Icon icon="heart-circle" color={Colors.green700} />}
       />
     </List.Section>
    </View>
    </ScrollView>

  );
}

const mapStateToProps = (state) => ({
  dates:state.getData.dates,

  
})



export default connect(mapStateToProps)(HistoricalData)