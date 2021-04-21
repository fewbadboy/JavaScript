type C = {a: string, b?: number}

function keepWholeObject({a, b = 100}: C): void {
  // do
}

// 通常
function f({ a='', b=0 } = {}): void {
  // ...
}
f()