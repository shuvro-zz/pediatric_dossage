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


//Limpiar inputs del formulario
document.querySelector("#limpiar").addEventListener("click", function(){
  document.getElementById("dosis_form").reset();
})

const amoxicilina = {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 5,
  mG: 125
}

const amoxicilinaCla = {
  dosisKilo: 40,
  dosisDia: 1,
  mL: 5,
  mG: 400
}

const eritromicina = {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 250,
  mG: 5
}

const azitromicina = {
  dosisKilo: 10,
  dosisDia: 1,
  mL: 5,
  mG: 200
}

const claritromicina = {
  dosisKilo: 15,
  dosisDia: 1,
  mL: 5,
  mG: 250
}

const clindamicina = {
  dosisKilo: 20,
  dosisDia: 1,
  mL: 5,
  mG: 75
}

const cefalexina = {
  dosisKilo: 50,
  dosisDia: 4,
  mL: 250,
  mG: 5
}

const cefadroxilo = {
  dosisKilo: 30,
  dosisDia: 2,
  mL: 5,
  mG: 250
}

const diclofenac = {
  dosisKilo: 3,
  dosisDia: 1,
  mL: 1,
  mG: 1.8
}

const ibuprofeno = {
  dosisKilo: 20,
  dosisDia: 3,
  mL: 5,
  mG: 100
}

const acetaminofen = {
  dosisKilo: 20,
  dosisDia: 4,
  mL: 5,
  mG: 150
}



document.querySelector("#select_med").addEventListener("change", function(){
  const med = eval(document.querySelector("#select_med").value)
  
  document.querySelector("#dosis").value = med.dosisKilo;
  document.querySelector("#dosisXDia").value = med.dosisDia;
  document.querySelector("#ml_del_medicamento").value = med.mL;
  document.querySelector("#mg_del_medicamento").value = med.mG;
})