import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;
  margin: 35px 0;
  font-family: ${({ theme }) => theme.fontWeight.bold};
`;

export const ItemSeparator = styled.View`
  margin: 15px 0;
`;

export const AddressList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 90,
  },
})`
  flex: 1;
  padding: 0 25px;
`;
