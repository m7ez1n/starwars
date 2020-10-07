const concat = (xs: any, ys: any) => xs.concat(ys)

const reduce = (reducer: any) => (initialValue: any) => (xs: any) => xs.reduce(reducer, initialValue)

const prop = (propName: string) => (obj: Record<any, any>) => obj[propName]

const map = (f: <T, U>(x: T) => U) => <T>(xs: T[]) => xs.map(f)

const range = (start: number, end: number) =>  Array.from({length: end - start + 1}).map((_, index) => start + index)

export const fetchPageRange = (start: number, end: number, url: string) => {
  return Promise.all(
    range(start, end).map((_, index) => 
      fetch(`${url}?page=${start + index}`).then(response => response.json())
    ))
      .then(map(prop("results")))
      .then(reduce(concat)([]));
};