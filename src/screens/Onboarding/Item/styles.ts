import styled from "styled-components/native";

export const Container = styled.View<{ width: string }>`
  width: ${({ width }) => width + "px" || "100%"};
`;

export const Gif = styled.Image`
  width: 100%;
  height: 350px;
  object-fit: contain;
`;

export const Info = styled.View`
  padding: 0 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontWeight.bold};
  color: #fff;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontWeight.regular};
  color: #aaa;
  margin-top: 12px;
`;
