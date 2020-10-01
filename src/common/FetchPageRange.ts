// TODO terminar de tipar essas funções
const concat = (xs, ys) => xs.concat(ys)

const reduce = reducer => initialValue => xs => xs.reduce(reducer, initialValue)

const prop = (propName: string) => obj => obj[propName]

const map = f => xs => xs.map(f)

const range = (start: number, end: number) =>  Array.from({length: end - start + 1}).map((_, index) => start + index)

export const fetchPageRange = (start: number, end: number, url: string) => {
  return Promise.all(
    range(start, end).map((_, index) => 
      fetch(`${url}?page=${start + index}`).then(response => response.json())
    ))
      .then(map(prop("results")))
      .then(reduce(concat)([]));
};