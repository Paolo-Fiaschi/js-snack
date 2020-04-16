

var palla = {
  "nome": "nomePalla",
  "peso": "10"
};
console.log(palla);
// palla.peso = prompt("modifica il peso");
console.log(palla);
$("p").html("il peso della palla è " + palla.peso);
$("input").val("");
$("input").keyup(
  function(event) {
    var pallaPeso = $("input").val();
    console.log(palla["peso"]);
    $("p").html("il peso della palla è " + pallaPeso);
  }
);
