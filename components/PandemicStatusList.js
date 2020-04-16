import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { List, Colors } from "react-native-paper";
import moment from 'moment';

export default function RecoveredList({data,increaseRecover}) {
    return (
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <List.Section>
              <List.Subheader>
                    <Text style={{fontSize: 20}}>Pandemic Status</Text>
                </List.Subheader>
                <List.Item
                  title="Recovered Cases"
                  description={data.dischargedCount}
                  left={() => (
                    <List.Icon color={Colors.green800} icon="human-greeting" />
                  )}
                  right={() => (
                   <View style={styles.rightListItem}>
                     <Text style={{color:Colors.green800, fontSize:20}}>+{increaseRecover.increase_in_recovered}</Text>
                   </View>
                  )}
                />
                <List.Item
                  title="Death Cases"
                  description={data.deathCount}
                  left={() => <List.Icon color={Colors.red400} icon="heart-broken" />}
                  right={() => (
                    <View style={styles.rightListItem}>
                      <Text style={{color:Colors.red800, fontSize:20}}>+{data.increaseDeathCount}</Text>
                    </View>
                   )}
                />
                 <List.Subheader>
                    <Text style={{textAlign:"right"}}>Updated {moment(data.countDate).format("dddd, MMMM Do YYYY, h:mm a")}</Text>
                </List.Subheader>
              </List.Section>
            </View>
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      marginHorizontal: 15,
      marginVertical: 5,
      flex: 1,
    },
    card: {
      backgroundColor: "white",
      elevation: 1,
      borderRadius: 10,
    },
    header: {
      flexDirection: "row",
      alignContent:"flex-end"
    },
    rightListItem:{
      margin:15
    }
  });
  