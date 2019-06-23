document.querySelector("#calcular").addEventListener("click", function(){

  //Variables para los calculos
  const peso = document.getElementById("peso").value;
  const dosis = document.getElementById("dosis").value;
  const dosisDia = document.getElementById("dosisXDia").value;
  const mL = document.getElementById("ml_del_medicamento").value;
  const mG = document.getElementById("mg_del_medicamento").value;
  const dosisMaxDiaria = peso * dosis;
  const dosisMl = (dosisMaxDiaria * mL) / mG;
  const dosisFinal = dosisMl / dosisDia;

//Verificar si falta algun dato o resolver la dosis
if (peso === "" || dosis === "" || dosisDia === "" || mL === "" || mG === ""){
  document.querySelector("#alert").classList.add("unhide");
  document.querySelector("#alert_message").textContent = "Parece que te falta algún dato, por favor verificalos";
} else {

  //Agregar clase para alerta con el resultado
  document.querySelector("#alert").classList.add("unhide");

  //Mensaje de alerta con el resultado
  document.querySelector("#alert_message").textContent = "La dosis del medicamento es de " + dosisFinal.toFixed(2) + " ml cada " + 24/dosisDia + " horas.";

//Resetear valores de los input luego de calcular
  document.getElementById("dosis_form").reset();
}})

//Remover clase para alerta con el resultado
document.querySelector("#alert_close").addEventListener("click", function(){
  document.querySelector("#alert").classList.remove("unhide");
})


//Abrir ayuda de dosis
document.querySelector("#dosis_question").addEventListener("click", function(){
  event.preventDefault();
  document.querySelector("#dosis_ayuda").classList.add("unhide");
})

//Cerrar ayuda de dosis
document.querySelector("#ayuda_close").addEventListener("click", function(){
  document.querySelector("#dosis_ayuda").classList.remove("unhide");
})

//Abrir ayuda de dosis diarias
document.querySelector("#dosisDiarias").addEventListener("click", function(){
  event.preventDefault();
  document.querySelector("#diaria_ayuda").classList.add("unhide");
})

//Cerrar ayuda de dosis diarias
document.querySelector("#diaria_close").addEventListener("click", function(){
  document.querySelector("#diaria_ayuda").classList.remove("unhide");
})