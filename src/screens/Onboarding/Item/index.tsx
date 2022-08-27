import { useWindowDimensions } from "react-native";
import { Container, Description, Gif, Info, Title } from "./styles";

interface ItemProps {
  id: string;
  title: string;
  description: string;
  gif: string;
}

const OnboardingItem = ({ data }: { data: ItemProps }) => {
  const { width } = useWindowDimensions();

  return (
    <Container width={width}>
      <Gif source={data.gif} />
      <Info>
        <Title> {data.title} </Title>
        <Description> {data.description} </Description>
      </Info>
    </Container>
  );
};

export default OnboardingItem;
