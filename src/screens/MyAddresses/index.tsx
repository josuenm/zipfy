import { Address } from "@components/AddressCard";
import { AddressList, Container, ItemSeparator, Title } from "./styles";

const MyAddresses = () => {
  const myAddresses = [
    {
      id: "1",
      cep: "12308530",
      localidade: "Jacareí",
      bairro: "Centro",
      logradouro: "Rua Cônego José Bento",
    },
    {
      id: "2",
      cep: "12308530",
      localidade: "Jacareí",
      bairro: "Centro",
      logradouro: "Rua Cônego José Bento",
    },
    {
      id: "3",
      cep: "12308530",
      localidade: "Jacareí",
      bairro: "Centro",
      logradouro: "Rua Cônego José Bento",
    },
    {
      id: "4",
      cep: "12308530",
      localidade: "Jacareí",
      bairro: "Centro",
      logradouro: "Rua Cônego José Bento",
    },
    {
      id: "5",
      cep: "12308530",
      localidade: "Jacareí",
      bairro: "Centro",
      logradouro: "Rua Cônego José Bento",
    },
  ];

  return (
    <Container>
      <Title>Todos os meus endereços</Title>
      <AddressList
        data={myAddresses}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={({ item }) => <Address data={item} />}
        keyExtractor={(item: { id: string }) => item.id}
      />
    </Container>
  );
};

export default MyAddresses;
