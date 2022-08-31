import { AddressFound } from "@components/AddressCard";
import { useState } from "react";
import { Keyboard } from "react-native";
import { zipApi } from "src/services/zipApi";
import { AddressProps } from "src/types/AddressProps";
import {
  AddressContainer,
  AddressTitle,
  Container,
  ErrorMessage,
  Input,
  SearchContainer,
  Submit,
  Title,
} from "./styles";

const Dashboard = () => {
  const [address, setAddress] = useState<AddressProps>(null);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string>(null);

  function handleErrors() {
    if (search.length < 1) {
      return "Insira um CEP";
    }

    if (search.length < 5) {
      return "Insira um CEP válido";
    }

    return false;
  }

  async function SearchZipCode() {
    Keyboard.dismiss();

    const isError = handleErrors();

    if (!!isError) {
      setError(isError);
      return;
    }

    const response = (await zipApi.findZip(
      search.replaceAll("-", "")
    )) as AddressProps;

    !!response && setAddress(response);
  }

  function onChangeSearch(text: string) {
    setSearch(text);
    error && setError(null);
  }

  return (
    <Container>
      <SearchContainer>
        <Title>Pesquise seu CEP</Title>
        <Input
          placeholder="00000-000"
          value={search}
          onChangeText={onChangeSearch}
          error={!!error}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Submit
          title="Pesquisar"
          accessibilityLabel="Pesquise seu CEP"
          onPress={SearchZipCode}
        />
      </SearchContainer>

      {address && (
        <AddressContainer>
          <AddressTitle>Aperte no card abaixo para ver melhor</AddressTitle>
          <AddressFound address={address} />
        </AddressContainer>
      )}
    </Container>
  );
};

export default Dashboard;
