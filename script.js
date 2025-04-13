const button = document.getElementById('sortear');
const resultadoElemento = document.getElementById('valor-resultado');

function gerarNumeroAleatorioComSuspense(inicio, fim, elementoResultado) {
  let intervaloId;
  let contador = inicio;
  const duracaoSuspense = 3500; // Duração total do efeito de suspense em milissegundos
  const intervaloRotacao = 50; // Intervalo entre cada número na rotação em milissegundos

  function atualizarNumero() {
    elementoResultado.textContent = contador;
    contador = (contador < fim) ? contador + 1 : inicio;
  }

  intervaloId = setInterval(atualizarNumero, intervaloRotacao);

  setTimeout(() => {
    clearInterval(intervaloId);
    const numeroSorteado = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
    elementoResultado.textContent = numeroSorteado;
  }, duracaoSuspense);
}

button.addEventListener('click', function() {
  const inicioInput = document.getElementById('inicio');
  const fimInput = document.getElementById('fim');
  const inicio = parseInt(inicioInput.value);
  const fim = parseInt(fimInput.value);

  if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
    resultadoElemento.textContent = 'Valor inválido';
    return; // Importante: sair da função se os valores forem inválidos
  }

  // Inicia o efeito de suspense
  gerarNumeroAleatorioComSuspense(inicio, fim, resultadoElemento);
});



/*const button = document.getElementById('sortear')

button.addEventListener('click' , function() {

    const inicio = parseInt(document.getElementById('inicio').value)
    const fim = parseInt(document.getElementById('fim').value)

    let result = Math.floor(Math.random() * (fim - inicio + 1)) + inicio

    if (isNaN(result)){
        result = 'Valor inválido'
    }

    document.getElementById('valor-resultado').textContent = result

}) */