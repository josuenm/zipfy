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

export const AddressContainer = styled.View`
  margin-top: 40px;
`;

export const AddressTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 15px;
`;
