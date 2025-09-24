function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  });
}


async function executa() {
  try { // tenta executar 
    const fase1 = await esperaAi('Fase 1', 1000); // espera essa função executar para executar a proxima 
    console.log(fase1); // mostra no console

    setTimeout(function() {
      console.log('Essa promise estava pendente', fase1); 
    }, 1100);

    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3);
  } catch(e) { // caso ocorrar um erro
    console.log(e);
  }
}
// executa();

const teste2 = esperaAi('qlq', 5000);
console.log(teste2);