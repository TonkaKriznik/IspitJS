export default (rezultati, pretraga) => {
if(rezultati.length == 0 || rezultati == undefined){
  return `
  <h2> Nema rezultata, unesite na engleskom.</h2>`
} else{
  if(rezultati.length >= 10 ){
    var html = `<h2> Evo rezultati za upit ${pretraga}:</h2> <ul>`
    for(var i = 0; i < 10; i++){
      var element = rezultati[i]; 
      html += `<li>${element.name} - ${element.country}</li>`;
    }
    html += "</ul>";
    return html;
  }
  else {
    var html = `
    <h2> Evo rezultati za upit ${pretraga}:</h2>
    <ul>
      ${rezultati
        .map((element) => {
          return `<li>${element.name} - ${element.country}</li>`;
        })  
        .join("")}
    </ul>
    `;
    return html;
  }
  
}

};
