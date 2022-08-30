export const zipApi = {
  findZip: async (zipCode: string) => {
    return await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((res) => res.json())
      .catch((error) => error);
  },
};
