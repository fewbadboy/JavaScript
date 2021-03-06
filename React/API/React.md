## React
1. React.Component
 React.Component 并未实现 shouldComponentUpdate()。
2. React.PureComponent
React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。
3. React.memo
React.memo 仅检查 props 变更。
4. React.createElement

5. React.createFactory

6. React.cloneElement

7. React.isValidElement
验证对象是否为 React 元素，返回值为 true 或 false。
8. React.Children

9. React.createRef

10. React.forwardRef
React 将使用 props 和 ref 作为参数来调用此函数。
11. React.lazy

12. React.Suspense

13. React.Fragment

## Hook
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
Hook 是完全可选的，100%向后兼容， 16.8.0就可以使用。

**只在最顶层使用Hook**
**不要在循环，条件或嵌套函数中调用 Hook** 确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们
**只在 React 函数中调用 Hook**
1. useState
```js
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。
返回值为：当前 state 以及更新 state 的函数的数组
```
```js
// 多个state变量 
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
```

2. useEffect
useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途

可以定义多个useEffect() 去使用不同的effect

```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```
useEffect返回一个函数是清除机制(订阅外部数据源。这种情况下，清除工作是非常重要的，可以防止引起内存泄露！)

*解释每次更新的时候都运行Effect*: 为什么effect的清除阶段在每次渲染都重新渲染都重新执行

`忘记正确地处理 componentDidUpdate 是 React 应用中常见的 bug 来源`

**提示: 通过跳过 Effect 进行性能优化**
 componentDidUpdate 中添加对 prevProps 或 prevState 的比较逻辑解决
这是很常见的需求，所以它被内置到了 useEffect 的 Hook API 中。如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可：
```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```
3. useContext
`const value = useContext(MyContext);`

4. useReducer
useState 的替代方案
5. useCallback

6. useMemo
允许你通过「记住」上一次计算结果的方式在多次渲染的之间缓存计算结果
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
7. useRef

8. useImperativeHandle

9. useLayoutEffect

10. useDebugValue

*使用规则*
1. 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
2. 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。

## ReactDOM
1. ReactDOM.render(element, container[, callback])
2. ReactDOM.createPortal(child, container)

## DOM元素
1. checked
2. className
3. dangerouslySetInnerHTML
4. htmlFor (for在JS是保留字，替换)
5. onChange
6. selected
7. style
```js
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}

// 或者
function HelloWorldComponentSub() {
  return <div style={{color: 'blue'}}>Hello World!</div>;
}
```
8. value

...

`React 组件经常采用自定义或和 DOM 相关的 props 的关系，React 采用了小驼峰命名的方式`,同样，所有的 SVG 属性也完全得到了支持


## 合成事件
[事件](https://zh-hans.reactjs.org/docs/events.html)
事件处理函数在冒泡阶段被触发，如需注册捕获阶段的事件处理函数，则应为事件名添加 Capture。例如，处理捕获阶段的点击事件请使用 onClickCapture，而不是 onClick。