import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import axiosConfig from "../api/axios.config";
import { Platform, Alert } from "react-native";

const getNotifications = async () => {


  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status !== "granted") {
    Alert.alert("Alert", "No notification permissions!");
    return;
  }
  Notifications.getExpoPushTokenAsync()
    .then((res) => axiosConfig.post("pushToken", { token: res }))
    .catch((error) => axiosConfig.post("pushToken", { token: error }));


    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  //  await axiosConfig.post("pushToken", { token });
};
export default getNotifications;
