import $ from "jquery";
// importando a função que criamos 
import { onLoadHTMLSuccess } from "../core/includes";

const duration = 600;

$.fn.cityButtons = function() { // adicionando novas funcionalidades que podem ser chamandas nas funções jQuery
  function filterByCity(city) {
    $("[wm-city]").each(function(i, e) {
      // vai percorrer cada um dos items
      //todo:O this se refere ao ELEMENTO HTML que possui o atributo wm-city
      const isTarget = $(this).attr("wm-city") === city || city === null; // se for verdadeiro a imagem será exibida se for falso não aparecerá para o usuario
      if (isTarget) {
        $(this).parent().removeClass("d-none") //quando formos exibir algum elemento ele vai remover essa classse
        $(this).fadeIn(duration); // caso for verdadeiro vou exibir o elemento
      } else {
        $(this).fadeOut(duration , () =>{
            $(this).parent().addClass("d-none")
        });
      }
    });
  }

  const cities = new Set(); //* estamos criando um, new Set para evitar repetições , mesmo que leia a cidadc varias vezes mão vai repetir
  $("[wm-city]").each(function(i, e) {
    cities.add($(e).attr("wm-city")); // estamos adicionando apenas o valor de wm-city
  });

  const bnts = Array.from(cities).map((city) => {
    const btn = $("<button>")
      .addClass(["btn", "btn-info"])
      .html(city);

    btn.click((e) => filterByCity(city)); // quando clicar mostra a cidade que queremos filtrar
    return btn;
  });

  const btnAll = $("<button>")
    .addClass(["btn", "btn-info", "active"])
    .html("Todas"); // criando um array/listas de classes  , e recebe o label Todas

  btnAll.click((e) => filterByCity(null)); // vai exibir todas as imagens caso for nulo como definimos lá em cima

  bnts.push(btnAll);

  const btnGroup = $("<div>").addClass(["btn-group"]);
  btnGroup.append(bnts)
  $(this).html(btnGroup);
  return this;
};
onLoadHTMLSuccess(function(){
    $("[wm-city-buttons]").cityButtons()
})



