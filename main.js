

// var palla = {
//   "nome": "nomePalla",
//   "peso": "10"
// };
// console.log(palla);
// // palla.peso = prompt("modifica il peso");
// console.log(palla);
// $("p").html("il peso della palla è " + palla.peso);
// $("input").val("");
// $("input").keyup(
//   function(event) {
//     var pallaPeso = $("input").val();
//     console.log(palla["peso"]);
//     if (pallaPeso < 0) {
//       alert("non corretto")
//     }
//     $("p").html("il peso della palla è " + pallaPeso);
//   }
// );


// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
 var bici = [{
   "nome": "nome1",
   "peso": 50
 },
 {
   "nome": "nome2",
   "peso": 70
 },
 {
   "nome": "nome3",
   "peso": 65
 }]
 console.log(bici);

for (var key in bici){
  // console.log(bici[key]);
  // console.log(bici[key].peso);
  var biciLight = bici[0];
  var biciInferiore = bici[key].peso;
  if (biciInferiore < biciLight.peso) {
    biciLight = bici[key]

  }
}
console.log(biciLight.nome);
$("p").html("La bici più leggere è " + biciLight.nome);
