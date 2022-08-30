import { useState } from "react";
import { zipApi } from "src/services/zipApi";
import { AddressProps, AddressResponseProps } from "src/types/AddressProps";
import {
  AddressFoundContainer,
  Container,
  InfoContainer,
  InfoDescription,
  InfoTitle,
  Input,
  SearchContainer,
  Submit,
  Title,
} from "./styles";

export const Dashboard = () => {
  const [address, setAddress] = useState<AddressProps[]>([]);
  const [search, setSearch] = useState<string>("");

  function convertResponse(data: { [key: string]: string }) {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const newObj = [];

    for (let i = 0; i < keys.length; i++) {
      newObj.push({ id: i, title: keys[i], description: values[i] });
    }

    return newObj;
  }

  async function SearchZipCode() {
    const response = (await zipApi.findZip(search)) as AddressResponseProps;

    if (!response) {
      return;
    }

    const newObj = convertResponse({
      bairro: response.bairro,
      cep: response.cep,
      complemento:
        response.complemento.length > 0 ? response.complemento : "Nenhum",
      ddd: response.ddd,
      icms: response.gia,
      população: response.ibge,
      cidade: response.localidade,
      rua: response.logradouro,
      siafi: response.siafi,
      estado: response.uf,
    });
    setAddress(newObj);
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

      {address.length > 0 && (
        <AddressFoundContainer
          data={address}
          renderItem={({ item }) => (
            <InfoContainer>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoDescription>{item.description}</InfoDescription>
            </InfoContainer>
          )}
          keyExtractor={(item: { id: string }) => item.id}
        />
      )}
    </Container>
  );
};
