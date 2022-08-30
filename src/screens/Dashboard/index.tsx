import { AddressCard } from "@components/AddressCard";
import { useState } from "react";
import { zipApi } from "src/services/zipApi";
import { AddressProps } from "src/types/AddressProps";
import {
  AddressContainer,
  AddressTitle,
  Container,
  Input,
  SearchContainer,
  Submit,
  Title,
} from "./styles";

export const Dashboard = () => {
  const [address, setAddress] = useState<AddressProps>(null);
  const [search, setSearch] = useState<string>("");

  async function SearchZipCode() {
    const response = (await zipApi.findZip(search)) as AddressProps;

    !!response && setAddress(response);
  }

  return (
    <Container>
      <SearchContainer>
        <Title>Pesquise seu CEP</Title>
        <Input
          placeholder="00000-000"
          value={search}
          onChangeText={(text: string) => setSearch(text)}
        />
        <Submit
          title="Pesquisar"
          accessibilityLabel="Pesquise seu CEP"
          onPress={SearchZipCode}
        />
      </SearchContainer>

      {address && (
        <AddressContainer>
          <AddressTitle>Aperte no card abaixo para ver melhor</AddressTitle>
          <AddressCard address={address} />
        </AddressContainer>
      )}
    </Container>
  );
};
