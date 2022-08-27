import OnboardingItem from "../Item";
import { Container, List } from "./styles";

const slides = [
  {
    id: "1",
    title: "Todos os dados na palma da sua mão",
    description:
      "Pesquise o CEP de um lugar e tenha acesso a dados como estado, cidade, bairro, rua e DDD.",
    gif: require("@assets/gifs/search.gif"),
  },
];

const OnboardingList = () => {
  return (
    <Container>
      <List
        data={slides}
        renderItem={({ item }) => <OnboardingItem data={item} />}
      />
    </Container>
  );
};

export default OnboardingList;
