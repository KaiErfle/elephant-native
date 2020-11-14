import React from "react";
import globalstyle from "../globalstyle";
import MyButton from "../../comps/Button";

import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homecont: {
    backgroundColor: "#DDD"
  }
});

const HomePage = () => {
  return (
    <View style={[globalstyle.rows, styles.homecont]}>
      <MyButton />
    </View>
  );
};

export default HomePage;
