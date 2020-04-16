import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainPage from "./screens/main";
import AboutPage from "./screens/about";
import { Ionicons } from "@expo/vector-icons";
import HistoricalData from "./screens/history";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Colors } from "react-native-paper";


const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TodaysReport"
        component={MainPage}
        options={{ title: "Today's Report" }}
      />
    </Stack.Navigator>
  );
}

function About() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutPage} />
    </Stack.Navigator>
  );
}
function History() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Some Info" component={HistoricalData} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.cyan700,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Todays Report"
        component={MainStack}
        options={{
          tabBarIcon: () => (
            <Ionicons name="md-paper" color={Colors.blueA400} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Info"
        component={History}
        options={{
          tabBarIcon: () => (
            <Ionicons
              color={Colors.blueA400}
              name="ios-information-circle"
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: () => (
            <Ionicons color={Colors.blueA400} name="md-person" size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs></MyTabs>
      </NavigationContainer>
    </Provider>
  );
}
