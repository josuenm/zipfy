import styled from "styled-components/native";

export const Container = styled.View`
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

export const AddressFoundContainer = styled.FlatList`
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #303030;
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoTitle = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  color: #fff;
  margin-right: 8px;
`;

export const InfoDescription = styled.Text`
  font-family: ${({ theme }) => theme.fontWeight.regular};
  font-size: 14px;
  color: #fff;
`;
