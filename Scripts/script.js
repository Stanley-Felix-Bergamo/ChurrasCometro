//--------------------------------  Regra  --------------------------------
//Carne            )  400gr  por pessoa + 6 Horas -> 650gr
//Cerveja          )  1200ml por pessoa + 6 horas -> 2000ml
//Refrigerante     )  1000ml por pessoa + 6 Horas -> 1500ml

//crianças valem por 0,5
//-------------------------------------------------------------------------

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function Calcular() {
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let QtdTotalCarne =
    CarnePorPessoa(duracao) * adultos +
    (CarnePorPessoa(duracao) / 2) * criancas;

  let QtdTotalCerveja = CervejaPorPessoa(duracao) * adultos;

  let QtdTotalRefrigerante =
    RefrigerantePorPessoa(duracao) * adultos +
    (RefrigerantePorPessoa(duracao) / 2 * criancas);

  resultado.innerHTML = `<p>${QtdTotalCarne/1000} kg de Carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(QtdTotalCerveja/355)} Latas de Cerveja</p>`;

  
  if(criancas<=0){
    resultado.innerHTML += `<p>${(QtdTotalRefrigerante = 0)} Pets's de Refrigerante</p>`;
  }else{

    resultado.innerHTML += `<p>${Math.ceil(QtdTotalRefrigerante/2000)} Pets's de Refrigerante</p>`;
  }
}

function RefrigerantePorPessoa() {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

function CarnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}
function CervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
