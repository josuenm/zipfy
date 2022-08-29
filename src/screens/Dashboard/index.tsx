import { Container, Input, SearchContainer, Submit, Title } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <SearchContainer>
        <Title>Pesquise seu CEP</Title>
        <Input placeholder="00000-000" />
        <Submit title="Pesquisar" accessibilityLabel="Pesquise seu CEP" />
      </SearchContainer>
    </Container>
  );
};
