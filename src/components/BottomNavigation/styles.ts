import styled from "styled-components/native";

export const Item = styled.View`
  width: 150px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fontWeight.medium};
  font-size: 14px;
`;
