import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px solid #303030;
  padding: 10px;
  border-radius: 10px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  color: #fff;
  margin-right: 5px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fontWeight.regular};
  font-size: 14px;
  color: #fff;
`;
