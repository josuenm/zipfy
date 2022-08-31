import styled from "styled-components/native";

export const AddressFoundContainer = styled.View`
  border: 1px solid #303030;
  padding: 10px;
  border-radius: 10px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FoundTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  color: #fff;
  margin-right: 5px;
`;

export const FoundDescription = styled.Text`
  font-family: ${({ theme }) => theme.fontWeight.regular};
  font-size: 14px;
  color: #fff;
`;

export const AddressContainer = styled.View`
  border: 1px solid #aaa;
  padding: 10px;
  border-radius: 10px;
`;

export const AddressZipCode = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fontWeight.bold};
  font-size: 18px;
  color: #fff;
  margin-right: 5px;
  margin-bottom: 10px;
`;

export const AddressTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  color: #aaa;
  margin-right: 5px;
`;

export const AddressDescription = styled.Text`
  font-family: ${({ theme }) => theme.fontWeight.medium};
  font-size: 14px;
  color: #aaa;
  margin-right: 5px;
`;
