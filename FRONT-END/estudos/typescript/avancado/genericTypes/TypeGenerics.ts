// generics usar o valor como tipo

const array1 = [1, 2,3] // array de number 

// podemos criar um tipo generico assim
// <"nome do tipo">

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean; 

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] { // usamos o T como type generico e ensirismo no array e na callback
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);