function* get() {
	yield 1;
  yield 7;
  yield 3;
  yield 4;
}

let i = get();
console.log(i.next());
console.log(i.next());
console.log(i.next());