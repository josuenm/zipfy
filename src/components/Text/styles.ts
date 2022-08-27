import styled from "styled-components/native";
import { TextStyles } from "./types";

export const Container = styled.Text<TextStyles>`
  font-size: ${({ fontSize }) => fontSize || "14px"};
  color: ${({ color }) => color || "#fff"};
`;
