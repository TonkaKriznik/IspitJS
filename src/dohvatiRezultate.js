export default async (terminPretrage) => {
  if(terminPretrage.length == 0){
    return undefined;
  }
  let rezSaServera = await fetch(
    `http://universities.hipolabs.com/search?country=${terminPretrage}`
  );
  let rezJSON = rezSaServera.json();
  return rezJSON;
};
