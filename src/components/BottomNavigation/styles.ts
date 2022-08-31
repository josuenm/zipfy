import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const TabBarStyle = StyleSheet.create({
  container: {
    width: "90%",
    height: 55,
    position: "absolute",
    bottom: 10,
    right: 0,
    left: "5%",
    backgroundColor: "rgba(150,150,150,0.8)",
    borderRadius: 100,
  },
});

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{ active: boolean }>`
  width: ${({ active }) => (active ? "40px" : "80px")};
  height: ${({ active }) => (active ? "40px" : "55px")};
  margin: auto 0;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  border-radius: 300px;

  background-color: ${({ active, theme }) => active && theme.colors.primary};
`;

export const Title = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fontWeight.medium};
  font-size: 12px;
  text-align: center;
`;
