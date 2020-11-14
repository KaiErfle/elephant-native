import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const Button = styled.View`
  width: 255px;
  height: 50px;
  background-color: "#5C80BC";
  color: "white";
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Buttons = ({ text }) => {
  return (
    <View>
      <Button text={text} />
    </View>
  );
};

export default Buttons;
