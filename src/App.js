import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import MainTemplate from "./pages/activeMessage";

import Main from "./pages/main";

const App = () => {
  return (
    <View>
      <MainTemplate />
    </View>
  );
};

// const styles = StyleSheet.create({
//   buttonsCont: {
//     flexDirection: "row"
//   },
//   starsCont: {
//     flexDirection: "row"
//   }
// });

export default App;
