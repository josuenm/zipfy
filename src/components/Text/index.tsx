import { Container } from "./styles";
import { TextProps } from "./types";

export default ({ children, ...rest }: TextProps) => (
  <Container {...rest}>{children}</Container>
);
