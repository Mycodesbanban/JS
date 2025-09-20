// funções callback são: funções que são executadas quando uma ação ocorre/finalizar , nós executamos essa função


function rand(min = 1000, max = 3000) { // criar um parametro minimo e maximo 
  const num = Math.random() * (max - min) + 
    min; // o numero vai ser aleatorio
  return Math.floor(num); // vai ser arrendodado para baixo
}

function f1(callback) { // defindinindo a função
  setTimeout(function() { 
    console.log('f1'); // mostra no console
    if (callback) callback(); // executando a função callback
  }, rand()); // colocando a função
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback(); // executando a função callback
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}
