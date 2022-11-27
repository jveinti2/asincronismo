function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterador = generator()

console.log(iterador.next().value)
console.log(iterador.next().value)
console.log(iterador.next().value)