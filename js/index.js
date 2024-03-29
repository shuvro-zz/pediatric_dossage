//Dosis de Analgesicos
const acetaminofen = {
  dosisKilo: 20,
  dosisDia: 4,
  mL: 5,
  mG: 150,
  nota: "Puede indicarse durante el embarazo",
  contra: "Trastornos hepáticos, no administrar por periodos mayores a 10 días",
  comercial: "Atamel, Tachipirin, Tempra"
}

const dipirona = {
  dosisKilo: 12,
  dosisDia: 4,
  mL: 1,
  mG: 50,
  nota: "Usar como ultima opción, indicado en pacientes con trastornos hepáticos",
  contra: "Disminuye resistencia a infecciones",
  comercial: "Bral, Conmel, Novalcina"
}

const diclofenac = {
  dosisKilo: 2,
  dosisDia: 2,
  mL: 1,
  mG: 1.8,
  nota: "Se recomienda su uso en niños mayores de 1 año",
  contra: "",
  comercial: "Cataflan, Clofen"
}

const ibuprofeno = {
  dosisKilo: 10,
  dosisDia: 2,
  mL: 5,
  mG: 100,
  nota: "Se recomienda su uso en niños mayores de 2 años",
  contra: "Antiagregante plaquetario en menor grado",
  comercial: "Brugesic"
}

const ketoprofeno = {
  dosisKilo: 0.5,
  dosisDia: 3,
  mL: 1,
  mG: 1,
  nota: "Excelente en traumatismos, se recomienda su uso en niños a partir de 6 meses",
  contra: "",
  comercial: "Profenid"
}


//Dosis de Antibioticos
const amoxicilina125 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 125,
  nota: "Actuá sobre la mayoría de microorganismos de la cavidad bucal",
  contra: "",
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo"
}

const amoxicilina250 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 250,
  nota: "Actuá sobre la mayoría de microorganismos de la cavidad bucal",
  contra: "",
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo"
}

const amoxicilina500 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 500,
  nota: "Actuá sobre la mayoría de microorganismos de la cavidad bucal",
  contra: "",
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo"
}

const amoxicilina750 = {
  dosisKilo: 90,
  dosisDia: 2,
  mL: 5,
  mG: 750,
  nota: "Actuá sobre la mayoría de microorganismos de la cavidad bucal",
  contra: "",
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo"
}

const amoxicilinaCla250 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 250,
  nota: "Niños mayores de 40Kg se maneja como adulto",
  contra: "Se ha reportado pigmentación en las superficies dentales",
  comercial: "Augmentin, Fulgram"
}

const amoxicilinaCla400 = {
  dosisKilo: 90,
  dosisDia: 3,
  mL: 5,
  mG: 400,
  nota: "Niños mayores de 40Kg se maneja como adulto",
  contra: "Se ha reportado pigmentación en las superficies dentales",
  comercial: "Augmentin, Fulgram"
}

const amoxicilinaCla600 = {
  dosisKilo: 90,
  dosisDia: 2,
  mL: 5,
  mG: 600,
  nota: "Niños mayores de 40Kg se maneja como adulto",
  contra: "Se ha reportado pigmentación en las superficies dentales",
  comercial: "Augmentin, Fulgram"
}

const eritromicina150 = {
  dosisKilo: 50,
  dosisDia: 4,
  mL: 5,
  mG: 150,
  nota: "En desuso, siempre debe drenarse absceso antes de indicarlo",
  contra: "",
  comercial: "Ilosone"
}

const eritromicina250 = {
  dosisKilo: 50,
  dosisDia: 4,
  mL: 5,
  mG: 250,
  nota: "En desuso, siempre debe drenarse absceso antes de indicarlo",
  contra: "",
  comercial: "Ilosone"
}

const claritromicina125 = {
  dosisKilo: 7.5,
  dosisDia: 2,
  mL: 5,
  mG: 125,
  nota: "",
  contra: "",
  comercial: "klaricid"
}

const claritromicina250 = {
  dosisKilo: 7.5,
  dosisDia: 2,
  mL: 5,
  mG: 250,
  nota: "",
  contra: "",
  comercial: "Klaricid"
}

const azitromicina = {
  dosisKilo: 10,
  dosisDia: 1,
  mL: 5,
  mG: 200,
  nota: "",
  contra: "",
  comercial: "Zitromax"
}

const sultamicilina = {
  dosisKilo: 50,
  dosisDia: 2,
  mL: 5,
  mG: 250,
  nota: "Niños mayores de 30Kg se maneja como adulto",
  contra: "",
  comercial: "Unasyn"
}

const cefadroxilo250 = {
  dosisKilo: 50,
  dosisDia: 2,
  mL: 5,
  mG: 250,
  nota: "Ideal para infecciones en tejido blando",
  contra: "En pacientes alérgicos a la penicilina puede crear reacción cruzada",
  comercial: "Bidroxil, Cefonax"
}

const cefadroxilo500 = {
  dosisKilo: 50,
  dosisDia: 2,
  mL: 5,
  mG: 500,
  nota: "Ideal para infecciones en tejido blando",
  contra: "En pacientes alérgicos a la penicilina puede crear reacción cruzada",
  comercial: "Bidroxil, Cefonax"
}

const metronidazol125 = {
  dosisKilo: 50,
  dosisDia: 4,
  mL: 5,
  mG: 125,
  nota: "",
  contra: "No se debe mezclar con alcohol etílico por riesgo de efecto antabus, se debe esperar 48 horas",
  comercial: "Flegyl, Metrovax"
}

const metronidazol250 = {
  dosisKilo: 50,
  dosisDia: 4,
  mL: 5,
  mG: 250,
  nota: "",
  contra: "No se debe mezclar con alcohol etílico por riesgo de efecto antabus, se debe esperar 48 horas",
  comercial: "Flegyl, Metrovax"
}


//Dosis preventivas de antibioticos
const amoxicilinaPre125 = {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 5,
  mG: 125,
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo",
  contra: "",
  nota: "En niños con mas de 27Kg y adultos administrar una dosis única de 2g"
}

const amoxicilinaPre250 = {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 5,
  mG: 250,
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo",
  contra: "",
  nota: "En niños con mas de 27Kg y adultos administrar una dosis única de 2g"
}

const amoxicilinaPre500 = {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 5,
  mG: 500,
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo",
  contra: "",
  nota: "En niños con mas de 27Kg y adultos administrar una dosis única de 2g"
}

const amoxicilinaPre750 = {
  dosisKilo: 50,
  dosisDia: 1,
  mL: 5,
  mG: 750,
  comercial: "Trimoxal, Amoxal, Genfar, Amoxiduo",
  contra: "",
  nota: "En niños con mas de 27Kg y adultos administrar una dosis única de 2g"
}

const azitromicinaPre = {
  dosisKilo: 15,
  dosisDia: 1,
  mL: 5,
  mG: 200,
  comercial: "Zitromax",
  contra: "",
  nota: "En niños con mas de 27Kg y adultos administrar una dosis única de 500mg"
}

const claritromicinaPre125 = {
  dosisKilo: 15,
  dosisDia: 1,
  mL: 5,
  mG: 125,
  comercial: "Claricid",
  contra: "",
  nota: "En niños con mas de 27Kg y adultos administrar una dosis única de 500mg"
}

const claritromicinaPre250 = {
  dosisKilo: 15,
  dosisDia: 1,
  mL: 5,
  mG: 250,
  comercial: "Claricid",
  contra: "",
  nota: "En niños con mas de 27Kg y adultos administrar una dosis única de 500mg",
}


//Dosis anestesicas
const lidocaina = {
  dosisKilo: 4.4,
  dosisDia: 36,
  nota: "",
  contra: "",
  comercial: ""
}

const mepivacaina = {
  dosisKilo: 4.4,
  dosisDia: 54,
  nota: "",
  contra: "",
  comercial: ""
}

const articaina = {
  dosisKilo: "7",
  dosisDia: 72,
  nota: "Contraindicado en menores de 4 años",
  contra: "",
  comercial: ""
}


//Abrir y cerrar menu
document.getElementById("nav_sandwich").addEventListener("click", function () {
  var i = Array.from(document.querySelectorAll("#nav-sandwich_inner div"))
  i[0].classList.toggle("nav_sandwich-up")
  i[1].classList.toggle("nav_sandwich-mid")
  i[2].classList.toggle("nav_sandwich-low")
  document.querySelector(".menuPhone").classList.toggle("unhideMenuPhone")
})




//Remover clase para alerta con el resultado
document.querySelector("#alert_close").addEventListener("click", function () {
  document.querySelector("#alert").classList.remove("unhide");
  document.querySelector(".block").style.display = "none"

})


//Abrir ayuda de dosis
document.querySelector("#dosis_question").addEventListener("click", function () {
  event.preventDefault()
  document.querySelector("#dosis_ayuda").classList.add("unhide");
  document.querySelector(".block").style.display = "block"
})


//Cerrar ayuda de dosis
document.querySelector("#ayuda_close").addEventListener("click", function () {
  event.preventDefault()
  document.querySelector("#dosis_ayuda").classList.remove("unhide");
  document.querySelector(".block").style.display = "none"
})


//Abrir ayuda de dosis diarias
if (document.querySelector("#dosisDiarias")) {
  document.querySelector("#dosisDiarias").addEventListener("click", function () {
    event.preventDefault()
    document.querySelector("#diaria_ayuda").classList.add("unhide");
    document.querySelector(".block").style.display = "block"
  })
}


//Cerrar ayuda de dosis diarias
document.querySelector("#diaria_close").addEventListener("click", function () {
  event.preventDefault()
  document.querySelector("#diaria_ayuda").classList.remove("unhide");
  document.querySelector(".block").style.display = "none"
})


//Limpiar inputs del formulario
document.querySelector("#limpiar").addEventListener("click", function () {
  document.getElementById("dosis_form").reset();
  document.getElementById("select_med").value = 'opciones';
  document.querySelector("#notas p").textContent = "";
  document.querySelector("#contra p").innerHTML = ""
  document.querySelector("#presentaciones p").innerHTML = "";
})

//Agregar valores predeterminados a los inputs
document.querySelector("#select_med").addEventListener("change", function () {
  const med = eval(document.querySelector("#select_med").value)

  document.querySelector("#dosis").value = med.dosisKilo;
  document.querySelector("#dosisXDia").value = med.dosisDia;
  document.querySelector("#ml_del_medicamento").value = med.mL;
  document.querySelector("#mg_del_medicamento").value = med.mG;
  document.querySelector("#notas p").textContent = med.nota;
  (med.contra !== "") ? document.querySelector("#contra p").innerHTML = "<span>Contras: </span>" + med.contra : document.querySelector("#contra p").innerHTML = "";
  (med.comercial !== "") ? document.querySelector("#presentaciones p").innerHTML = "<span>Nombre comercial: </span>" + med.comercial : document.querySelector("#presentaciones p").innerHTML = "";

})


//Calcular dosis
if (!document.getElementById("body_anestesia")){
  //Calculo de dosis antibioticas y analgesicas
  document.querySelector("#calcular").addEventListener("click", function () {

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
    if (peso === "" || dosis === "" || dosisDia === "" || mL === "" || mG === "") {
      document.querySelector("#alert").classList.add("unhide");
      document.querySelector("#alert_message").textContent = "Opss!! parece que te falta algún dato, por favor verificalos";
      document.querySelector(".block").style.display = "block"
    } else {
  
      //Agregar clase para alerta con el resultado
      document.querySelector("#alert").classList.add("unhide");
      document.querySelector(".block").style.display = "block"
  
      //Mensaje de alerta con el resultado
      if (document.querySelector("form").classList.contains("prevent")) {
        document.querySelector("#alert_message").textContent = "La dosis del medicamento es de " + dosisFinal.toFixed(1) + " ml en una dosis unica 30 o 60 minutos antes del tratamiento";
      } else {
        document.querySelector("#alert_message").textContent = "La dosis del medicamento es de " + dosisFinal.toFixed(1) + " ml cada " + 24 / dosisDia + " horas.";
      }
  
  
      //Resetear valores de los input luego de calcular
      document.getElementById("dosis_form").reset();
    }
  })
} else {
  //Calculo de dosis anestesicas
  document.querySelector("#calcularAnestesia").addEventListener("click", function () {
    //Variables para los calculos
    const peso = document.getElementById("peso").value;
    const dosis = document.getElementById("dosis").value;
    const dosisDia = document.getElementById("dosisXDia").value;
    const dosisMaxDiaria = peso * dosis;
    const dosisFinal = dosisMaxDiaria / dosisDia;
  
    //Verificar si falta algun dato o resolver la dosis
    if (peso === "" || dosis === "" || dosisDia === "") {
      document.querySelector("#alert").classList.add("unhide");
      document.querySelector("#alert_message").textContent = "Opss!! parece que te falta algún dato, por favor verificalos";
      document.querySelector(".block").style.display = "block"
    } else {
  
      //Agregar clase para alerta con el resultado
      document.querySelector("#alert").classList.add("unhide");
      document.querySelector(".block").style.display = "block"
  
      //Mensaje de alerta con el resultado
        document.querySelector("#alert_message").textContent = "Se recomienda administrar " + dosisFinal.toFixed(1) + " cartuchos de anestesia";
  
      //Resetear valores de los input luego de calcular
      document.getElementById("dosis_form").reset();
    }
  })
}

