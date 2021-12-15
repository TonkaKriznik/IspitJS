import Layout from "../view/layout.js";
import dohvatiRezultate from "./dohvatiRezultate.js";
import RezultatiView from "../view/rezultati.js";

export default async () => {
  document.getElementById("app").innerHTML = Layout();
  document.getElementById("spinner").hidden = true;
  document.getElementById("search").addEventListener("keyup", async (event) => {
    document.getElementById("spinner").hidden = false;
    let Rez = await dohvatiRezultate(event.target.value);
    document.getElementById("spinner").hidden = true;
    document.getElementById("rezultati").innerHTML = RezultatiView(Rez,event.target.value);
  });
};
