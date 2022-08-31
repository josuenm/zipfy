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
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 100,
  },
  icon: {
    display: "none",
  },
});

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{ active: boolean }>`
  width: ${({ active }) => "40px"};
  height: ${({ active }) => "40px"};
  margin: auto 0;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  border-radius: 300px;

  background-color: ${({ active, theme }) => active && theme.colors.primary};
`;

export const Title = styled.Text<{ active: boolean }>`
  color: ${({ active }) => (active ? "#fff" : "#000")};
  font-family: ${({ theme }) => theme.fontWeight.medium};
  font-size: 14px;
`;
