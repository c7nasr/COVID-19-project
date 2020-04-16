import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native-paper';

export default function AboutPage() {
  return (
    <View style={styles.container}>

    <View style={styles.content}>
      <Text>App version: 1.0.50</Text>
     </View>
     <View style={styles.footer}>
     <Text>Made with <Ionicons name="ios-heart" size={14}  color="red"></Ionicons> by Mahmoud Nasr.</Text>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "white",
    justifyContent: 'space-between'
  },
  footer:{
    marginBottom:10,
    alignItems:"center"
  },
  content:{
    padding:20
  }
});