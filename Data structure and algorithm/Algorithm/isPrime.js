// 质数
function isPrime(num){
  let sq = ~~Math.sqrt(num)
  let i = 1
  while(++i <= sq){
      if(num%i === 0){
          return false
      }
  }
  return true
}