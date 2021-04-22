// 函数: 左边可以不设置类型，TS编译器会自动识别
// let myAdd = function(x: number, y:number): number { return x + y }
let myAdd: (x: number, y:number) => number = function(x: number, y:number): number {
  return x + y
}

//可选参数和默认参数
function fun1(firstName: string, lastName?: string) {}
function fun2(firstName: string, lastName = '123') {} // 第二个参数的类型 string，依据默认值类型来匹配

// 剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ")
}
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName

// this 和箭头函数
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function(this: Deck) { // 指定this的类型，否则为any
      return () => {
          let pickedCard = Math.floor(Math.random() * 52)
          let pickedSuit = Math.floor(pickedCard / 13)
          return {suit: this.suits[pickedSuit], card: pickedCard % 13}
      }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"]
function pickCard(x: {suit: string; card: number; }[]): number
function pickCard(x: number): {suit: string; card: number; }
function pickCard(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)]
let pickedCard2 = pickCard(15)
// 这样改变后，重载的pickCard函数在调用的时候会进行正确的类型检查