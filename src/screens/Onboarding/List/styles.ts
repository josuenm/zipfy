import styled from "styled-components/native";

export const Container = styled.View`
  flex: 3;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
})``;

export const InfoContainer = styled.View`
  margin-bottom: 70px;
`;

export const NextButtonContainer = styled.View`
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

export const SkipButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin: 25px auto 0;
`;

export const SkipText = styled.Text`
  color: #aaa;
`;
