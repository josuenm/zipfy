import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();

export const Navigator = styled(Tab.Navigator)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  width: "100%";
`;

export const Item = styled.View`
  width: 150px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fontWeight.medium};
  font-size: 14px;
`;
