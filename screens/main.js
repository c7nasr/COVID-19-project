import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
} from "react-native";
import NewCasesList from "../components/NewCasesList";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RecoveredList from "../components/PandemicStatusList";
import Prediction from "../components/Prediection";
import PredictionDeaths from "../components/PredectionDeath";
import { ActivityIndicator, Colors } from "react-native-paper";

import { connect } from "react-redux";
import {
  getToday,
  calcRecovered,
  predictionCases,
  history,
} from "../redux/actions/fetchData";
import getNotifications from "../notifications/getPermission";
const MainPage = ({
  getToday,
  calcRecovered,
  increase_in_recovered,
  dataNow,
  predictionCases,
  next_days_cases,
  next_days_death,
  history,
  pandemicStartAtDays,
  navigation,
}) => {
  useEffect(() => {
    getToday().then(() => {
      getNotifications()

      calcRecovered();
      predictionCases().then(() => history());
    });
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getToday().then(() => setRefreshing(false));
  }, [refreshing]);
  if (pandemicStartAtDays.pandemicStartAtDays)
    navigation.setOptions({
      title: "Today's Report - Day " + pandemicStartAtDays.pandemicStartAtDays,
    });
  if (!dataNow || !next_days_cases || !next_days_death)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  return (
    <View style={{ backgroundColor: Colors.grey100 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <NewCasesList name="New Cases Today" data={dataNow} />
        <RecoveredList data={dataNow} increaseRecover={increase_in_recovered} />
        <Prediction
          dates={next_days_cases.dates}
          cases={next_days_cases.totals}
        />
        <PredictionDeaths
          dates={next_days_cases.dates}
          death={next_days_death.totalsDeath}
        />

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
  },
});

const mapStateToProps = (state) => ({
  dataNow: state.getData.payload,
  increase_in_recovered: state.getData,
  next_days_cases: state.getData.next_days_cases,
  next_days_death: state.getData.next_days_death,
  pandemicStartAtDays: state.getData.dates,
});

export default connect(mapStateToProps, {
  getToday,
  calcRecovered,
  predictionCases,
  history,
})(MainPage);
