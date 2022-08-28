import styled from "styled-components/native";

export const Container = styled.View`
  flex: 3;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: true,
  pagingEnabled: true,
})``;
