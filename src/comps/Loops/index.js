import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//with styled components
const ButtonCont = styled.TouchableOpacity`
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#FAD")};
`;

//without styled components
const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#FAD",
    flexDirection: "row"
  }
});

const Stars = ({ onClick, bgcolor, numStars }) => {
  //without styled components
  // background-color:${props=>props.bgcolor ? props.bgcolor : "#FAD"};
  const newstyles = { backgroundColor: bgcolor ? bgcolor : "#FAD" };
  const touchstyles = [styles.cont, newstyles];

  var stars = [];
  for (var i = 0; i < numStars; i++) {
    stars.push(<Text>Stars</Text>);
  }

  return (
    <View>
      {/* without styled components */}
      <TouchableOpacity onPress={onClick} style={touchstyles}>
        {stars}
      </TouchableOpacity>
    </View>
  );
};

Stars.defaultProps = {
  onClick: () => {},
  numStars: 3
};

export default Stars;
