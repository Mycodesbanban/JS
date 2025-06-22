const inputTarefa = document.querySelector('.input-tarefa'); // seleciona a classe input-tarefa
const btnTarefa = document.querySelector('.btn-tarefa'); // seleciona a classe btn-tarefa
const tarefas = document.querySelector('.tarefas'); // seleciona a classe tarefas

function criaLi() {
  const li = document.createElement('li'); //cria um elemento li
  return li; // retorna esse elemento
}

inputTarefa.addEventListener('keypress', function(e) { // quando a tecla for precionada , execute essa função
  if (e.keyCode === 13) { // 13= enter , quando cliamos enter essa função será executada
    if (!inputTarefa.value) return; // se o valor da variavel for falso vai retorna a a função criar tarefa com o valor da variavel 
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = ''; // limpar o input apos clicar enter 
  inputTarefa.focus(); // foca o input
}

function criaBotaoApagar(li) {
  li.innerText += ' '; // recebe uma string vazia 
  const botaoApagar = document.createElement('button'); // cria um botão
  botaoApagar.innerText = 'Apagar'; // recebe o nome de apagar 
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');  // define a classe com o nome apagar 
  botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // o titulo vai ser apagar está tarefa 
  li.appendChild(botaoApagar); // coloca dentro do li
}

function criaTarefa(textoInput) {
  const li = criaLi(); // recebe a primeira função que criamos para criar uma lista 
  li.innerText = textoInput; // recebe o texto digitado no input
  tarefas.appendChild(li);  // adiciona dentro de tarefas um li
  limpaInput(); // limpa
  criaBotaoApagar(li); // criar um li para o botão de apagar 
  salvarTarefas(); // salvar a lista que criamos 
}

btnTarefa.addEventListener('click', function() { // quando ouver um click vai executar essa função
  if (!inputTarefa.value) return; // se o valor for falso vai retornar nada  
  criaTarefa(inputTarefa.value); // cria a tarefa com o valor 
});

document.addEventListener('click', function(e) {
  const el = e.target; // indentificar o valor que executou essa função

  if (el.classList.contains('apagar')) { // verifica se tem a classe apagar
    el.parentElement.remove(); // pega o pai do elemento e apaga 
    salvarTarefas(); // executa a função salvar tarefa
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li'); // seleciona um li
  const listaDeTarefas = [];  

  for (let tarefa of liTarefas) { // recebe os li
    let tarefaTexto = tarefa.innerText; // recebe o texto digitado
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();  // subistituir uma parte da string por outra , e apaga os espaços em branco no inicio e o fim da string
    listaDeTarefas.push(tarefaTexto); // coloca dentro do array
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // tranforma em json
  localStorage.setItem('tarefas', tarefasJSON); // amarzena os dados  , e salva no navegador  , a tarefas e o identificador para o dado , e o tarefasJson e o dado que está sendo salvo
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas'); // recupera os dados amarzenados em tarefas 
  const listaDeTarefas = JSON.parse(tarefas); // converte uma string json para um objeto js

  for(let tarefa of listaDeTarefas) { // tem os valores de lista de Tarefas 
    criaTarefa(tarefa); // cploca a tarefa na tela 
  }
}
adicionaTarefasSalvas(); // executa essa função
