export const getData = async () => {
  const response = await fetch('https://api.jsonbin.io/v3/b/6548e14512a5d37659959d4e');
  const { record: data } = await response.json();
  return data;
};
