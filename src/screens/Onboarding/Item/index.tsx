import { useWindowDimensions } from "react-native";
import { Container, Description, Title } from "./styles";

interface ItemProps {
  id: string;
  title: string;
  description: string;
}

const OnboardingItem = ({ data }: { data: ItemProps }) => {
  const { width } = useWindowDimensions();

  return (
    <Container width={width}>
      <Title> {data.title} </Title>
      <Description> {data.description} </Description>
    </Container>
  );
};

export default OnboardingItem;
