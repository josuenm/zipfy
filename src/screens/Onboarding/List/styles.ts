import styled from "styled-components/native";

export const Container = styled.View`
  flex: 3;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
})``;

export const NextButtonContainer = styled.View`
  margin-bottom: 100px;
  align-items: center;
  justify-content: center;
`;

export const ButtonWithIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 20px;
`;
