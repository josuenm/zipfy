import { AddressProps } from "src/types/AddressProps";
import {
  AddressContainer,
  AddressDescription,
  AddressFoundContainer,
  AddressTitle,
  AddressZipCode,
  FoundDescription,
  FoundTitle,
  Item,
} from "./styles";

export const AddressFound = ({ address }: { address: AddressProps }) => {
  return (
    <AddressFoundContainer>
      <Item>
        <FoundTitle>CEP:</FoundTitle>
        <FoundDescription>{address.cep}</FoundDescription>
      </Item>
      <Item>
        <FoundTitle>Cidade:</FoundTitle>
        <FoundDescription>{address.localidade}</FoundDescription>
      </Item>
      <Item>
        <FoundTitle>Estado:</FoundTitle>
        <FoundDescription>{address.uf}</FoundDescription>
      </Item>
      <Item>
        <FoundTitle>Rua:</FoundTitle>
        <FoundDescription>{address.logradouro}</FoundDescription>
      </Item>
      <Item>
        <FoundTitle>Bairro:</FoundTitle>
        <FoundDescription>{address.bairro}</FoundDescription>
      </Item>
      {address.complemento.length > 0 && (
        <Item>
          <FoundTitle>Complemento:</FoundTitle>
          <FoundDescription>{address.complemento}</FoundDescription>
        </Item>
      )}
      <Item>
        <FoundTitle>DDD:</FoundTitle>
        <FoundDescription>{address.ddd}</FoundDescription>
      </Item>
      <Item>
        <FoundTitle>População:</FoundTitle>
        <FoundDescription>{address.ibge}</FoundDescription>
      </Item>
      <Item>
        <FoundTitle>População:</FoundTitle>
        <FoundDescription>{address.siafi}</FoundDescription>
      </Item>
      <Item>
        <FoundTitle>GIA:</FoundTitle>
        <FoundDescription>{address.siafi}</FoundDescription>
      </Item>
    </AddressFoundContainer>
  );
};

export const Address = ({ data }: { data: AddressProps }) => {
  return (
    <AddressContainer>
      <AddressZipCode>
        {data.cep.substring(0, 5) + "-" + data.cep.substring(5)}
      </AddressZipCode>

      <Item>
        <AddressTitle>Cidade: </AddressTitle>
        <AddressDescription>{data.localidade}</AddressDescription>
      </Item>
      <Item>
        <AddressTitle>Bairro: </AddressTitle>
        <AddressDescription>{data.bairro}</AddressDescription>
      </Item>
      <Item>
        <AddressTitle>Rua: </AddressTitle>
        <AddressDescription>{data.logradouro}</AddressDescription>
      </Item>
    </AddressContainer>
  );
};
