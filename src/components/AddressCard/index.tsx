import { AddressProps } from "src/types/AddressProps";
import { Container, Description, Item, Title } from "./styles";

export const AddressCard = ({ address }: { address: AddressProps }) => {
  return (
    <Container>
      <Item>
        <Title>CEP:</Title>
        <Description>{address.cep}</Description>
      </Item>
      <Item>
        <Title>Cidade:</Title>
        <Description>{address.localidade}</Description>
      </Item>
      <Item>
        <Title>Estado:</Title>
        <Description>{address.uf}</Description>
      </Item>
      <Item>
        <Title>Rua:</Title>
        <Description>{address.logradouro}</Description>
      </Item>
      <Item>
        <Title>Bairro:</Title>
        <Description>{address.bairro}</Description>
      </Item>
      {address.complemento.length > 0 && (
        <Item>
          <Title>Complemento:</Title>
          <Description>{address.complemento}</Description>
        </Item>
      )}
      <Item>
        <Title>DDD:</Title>
        <Description>{address.ddd}</Description>
      </Item>
      <Item>
        <Title>População:</Title>
        <Description>{address.ibge}</Description>
      </Item>
      <Item>
        <Title>População:</Title>
        <Description>{address.siafi}</Description>
      </Item>
      <Item>
        <Title>GIA:</Title>
        <Description>{address.siafi}</Description>
      </Item>
    </Container>
  );
};
