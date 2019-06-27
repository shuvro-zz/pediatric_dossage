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


const acetaminofen = {
  dosisKilo: 20,
  dosisDia: 4,
  mL: 5,
  mG: 150,
  comercial: "Atamel, Tachipirin, Tempra"
}

const dipirona = {
  dosisKilo: 12,
  dosisDia: 4,
  mL: 1,
  mG: 50,
  comercial: "Bral, Conmel, Novalcina"
}

const diclofenac = {
  dosisKilo: 2,
  dosisDia: 2,
  mL: 1,
  mG: 1.8,
  comercial: "Cataflan, Clofen"
}

const ibuprofeno = {
  dosisKilo: 10,
  dosisDia: 2,
  mL: 5,
  mG: 100,
  comercial: "Brugesic"
}

const ketoprofeno = {
  dosisKilo: 0.5,
  dosisDia: 3,
  mL: 1,
  mG: 1,
  comercial: "Profenid"
}

const amoxicilina125 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 125,
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo"
}

const amoxicilina250 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 250,
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo"
}

const amoxicilina500 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 500,
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo"
}

const amoxicilina750 = {
  dosisKilo: 90,
  dosisDia: 2,
  mL: 5,
  mG: 750,
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo"
}

const amoxicilinaCla250 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 250,
  comercial: "Augmentin, Fulgram"
}

const amoxicilinaCla400 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 400,
  comercial: "Augmentin, Fulgram"
}

const amoxicilinaCla600 = {
  dosisKilo: 90,
  dosisDia: 2,
  mL: 5,
  mG: 600,
  comercial: "Augmentin, Fulgram"
}

const eritromicina150 = {
  dosisKilo: 50,
  dosisDia: 4,
  mL: 5,
  mG: 150,
  comercial: "Ilosone"
}

const eritromicina250 = {
  dosisKilo: 50,
  dosisDia: 4,
  mL: 5,
  mG: 250,
  comercial: "Ilosone"
}

const claritromicina125 = {
  dosisKilo: 7.5,
  dosisDia: 2,
  mL: 5,
  mG: 125,
  comercial: "Claricid"
}

const claritromicina250 = {
  dosisKilo: 7.5,
  dosisDia: 2,
  mL: 5,
  mG: 250,
  comercial: "Claricid"
}

const azitromicina = {
  dosisKilo: 10,
  dosisDia: 1,
  mL: 5,
  mG: 200,
  comercial: "Zitromax"
}

const sultamicilina = {
  dosisKilo: 50,
  dosisDia: 2,
  mL: 5,
  mG: 250,
  comercial: "Unasyn"
}

const cefadroxilo250 = {
  dosisKilo: 50,
  dosisDia: 2,
  mL: 5,
  mG: 250,
  comercial: "Bidroxil, Cefonax"
}

const cefadroxilo500 = {
  dosisKilo: 50,
  dosisDia: 2,
  mL: 5,
  mG: 500,
  comercial: "Bidroxil, Cefonax"
}

const metronidazol125 = {
  dosisKilo: 50,
  dosisDia: 4,
  mL: 5,
  mG: 125,
  comercial: "Flegyl, Metrovax"
}

const metronidazol250 = {
  dosisKilo: 50,
  dosisDia: 4,
  mL: 5,
  mG: 250,
  comercial: "Flegyl, Metrovax"
}

const amoxicilinaPre125= {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 5,
  mG: 125,
  nota: ">27Kg y adultos 2g"
}

const amoxicilinaPre250= {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 5,
  mG: 250,
  nota: ">27Kg y adultos 2g"
}

const amoxicilinaPre500= {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 5,
  mG: 500,
  nota: ">27Kg y adultos 2g"
}

const amoxicilinaPre750= {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 5,
  mG: 750,
  nota: ">27Kg y adultos 2g"
}

const azitromicinaPre= {
  dosisKilo: 15,
  dosisDia: 1,
  mL: 5,
  mG: 200,
  nota: ">27Kg y adultos 500mg"
}

const claritromicinaPre125= {
  dosisKilo: 15,
  dosisDia: 1,
  mL: 5,
  mG: 125,
  nota: ">27Kg y adultos 500mg"
}

const claritromicinaPre250= {
  dosisKilo: 15,
  dosisDia: 1,
  mL: 5,
  mG: 250,
  nota: ">27Kg y adultos 500mg"
}

document.querySelector("#select_med").addEventListener("change", function(){
  const med = eval(document.querySelector("#select_med").value)
  
  document.querySelector("#dosis").value = med.dosisKilo;
  document.querySelector("#dosisXDia").value = med.dosisDia;
  document.querySelector("#ml_del_medicamento").value = med.mL;
  document.querySelector("#mg_del_medicamento").value = med.mG;
  document.querySelector("#presentaciones p").textContent = med.nota || "Nombre comercial: " + med.comercial; 
})