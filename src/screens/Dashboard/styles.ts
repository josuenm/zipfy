import styled from "styled-components/native";

export const Container = styled.ScrollView`
  margin-top: 50px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  align-items: center;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontWeight.bold};
  color: #fff;
`;

export const Input = styled.TextInput<{ error: boolean }>`
  width: 200px;
  padding: 5px 10px;
  margin-top: 25px;
  border-radius: 10px;
  background-color: #fff;
  border: ${({ error }) => error && "2px solid #fc5d5d"};
  margin-bottom: 15px;
`;

export const ErrorMessage = styled.Text`
  color: #fc5d5d;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 25px;
`;

export const Submit = styled.Button`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
`;

export const AddressContainer = styled.View`
  margin-top: 40px;
`;

export const AddressTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 15px;
`;
