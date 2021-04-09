import React from "react";
import {StyleSheet, View, Text} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "../constants";

function formatDate(date: Date){
  const today = date.getDate();
  const month = `${
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ][date.getMonth()]
  }`;
  return `${month} ${today < 10 && "0"}${today}, ${date.getFullYear()}`;
}

function HomeScreen() {
  const now = new Date();
  return (
    <LinearGradient
      colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]}
      testID="home-screen"
      style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.date}>{formatDate(now)}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: "space-between",
    justifyContent: "space-evenly",
  },
  title: {
    justifyContent: "flex-end",
  },
  date: {
    color: Colors.GRAY,
    fontSize: 13,
  },
});

export default HomeScreen;
