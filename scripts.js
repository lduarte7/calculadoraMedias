let aviso = document.querySelector("#aviso")
let formulario = document.querySelector("form")

let btnCalc = document.querySelector("#btnCalc")
let btnLimpar = document.querySelector("#btnReset")

// Selecionar as caixas de texto por id

let boxNota1 = document.querySelector("#nota1")
let boxNota2 = document.querySelector("#nota2")
let boxMedia = document.querySelector("#media")
let boxSituacao = document.querySelector("#situacao")

// Calcular a media

function calcularMedia (n1, n2) {
  return (n1 + n2) / 2
}

// Definir situacao final com base na media
function situacaoFinal(mediaFinal) {

  let situacaoFinal = ""
  if (mediaFinal >= 7) {
    situacaoFinal = "Aprovado(a)"
  } else if (mediaFinal <= 3) {
    situacaoFinal = "Reprovado(a)"
  } else {
    situacaoFinal = "Recuperação"
  }
  return situacaoFinal

}

function formatarSituacao(situacaoFinal) {
  console.log('Situação Final ' + situacaoFinal)
  switch(situacaoFinal) {

      case 'Aprovado(a)':
          boxSituacao.classList.remove('reprovado')
          boxSituacao.classList.remove('recuperacao')
          boxSituacao.classList.add('aprovado')
          console.log('adicionar class aprovado')
          break
      
      case 'Reprovado(a)':
          boxSituacao.classList.remove('aprovado')
          boxSituacao.classList.remove('recuperacao')
          boxSituacao.classList.add('reprovado')
          console.log('adicionar class reprovado')
          break
      
      case 'Recuperação':
          boxSituacao.classList.remove('aprovado')
          boxSituacao.classList.remove('reprovado')
          boxSituacao.classList.add('recuperacao')
          console.log('adicionar class recuperacao')
          break

      default:
          console.log('Situação Indefinida')
          console.log('teste')
  } // fim do switch case

}


function validarNumero(numero) {
  let num1 = boxNota1.value
  let num2 = boxNota2.value
  if (num1 < 0 || num2 > 10 || num2 < 0 || num2 > 10){
    formulario.reset()
    aviso.textContent = "Digite uma nota entre 0.0 e 10.0"
    aviso.classList.add("Alerta")
    setTimeout(function(){
      aviso.textContent = ""
      aviso.classList.remove("Alerta")
    }, 2000);
  }
}


btnCalc.addEventListener('click', function(e){
  console.log("Calcular Média")
// pegar o valor que esta dentro das caixas
// usar o metodo parseFloat para converter string em float

  let nota1 = parseFloat(boxNota1.value)
  let nota2 = parseFloat(boxNota2.value)
  let media = calcularMedia(nota1, nota2)

  console.log(nota1)
  console.log(nota2)
  console.log(media)

  if(isNaN(media) || media < 0 ) {
    console.log("Não é um número")
    boxSituacao.value = ""
  } else {
    boxMedia.value = parseFloat(media)
    boxSituacao.value = situacaoFinal(media)
    formatarSituacao(situacaoFinal(media))
  }
  e.preventDefault()
})

btnLimpar.addEventListener("click", function(){
  boxSituacao.classList.remove('aprovado')
  boxSituacao.classList.remove('reprovado')
  boxSituacao.classList.remove('recuperacao')
})
