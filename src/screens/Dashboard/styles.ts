import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const SearchContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontWeight.bold};
  color: #fff;
`;

export const Input = styled.TextInput`
  width: 200px;
  padding: 5px 10px;
  margin: 25px 0;
  border-radius: 10px;
  background-color: #fff;
`;

export const SubmitContainer = styled.View`
  width: 100%;
`;

export const Submit = styled.Button`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
`;
