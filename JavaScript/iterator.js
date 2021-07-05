let fibonacci = {
  [Symbol.iterator]: function*() {
    let pre = 0, cur = 1;
    for (let i = 0; i < 4; i++) {
      let temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

for(let i of fibonacci) {
  console.log(i)
}