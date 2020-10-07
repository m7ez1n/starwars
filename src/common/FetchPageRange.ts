type Semigroup<T> = {
  concat:
    | ((x: Semigroup<T>) => Semigroup<T>)
    | typeof Array.prototype["concat"]
    | typeof String.prototype["concat"]
}
const concat = <T>(xs: Semigroup<T>, ys: Semigroup<T>) => xs.concat(ys)

type Foldable<T> = {
  reduce: <U>(f: (a: T, value: U) => T, initialValue: T) => U
}
const reduce = <T, U>(reducer: (accum: T, value: U) => T) => (
  initialValue: T
) => (xs: Foldable<T>) => xs.reduce(reducer, initialValue)

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