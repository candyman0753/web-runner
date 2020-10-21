## Hook

本质是函数，钩入React特性

- useState

  作用是向函数式组件添加state，传递初始state值，返回当前state和更新state的函数

  ```js
  // 声明count变量
  const [count, setCount] = useState(0)
  // 修改count值
  setCount(count+1)
  ```

- useEffect

  作用是在函数式组件渲染后执行某些副作用操作，副作用包括数据获取、设置订阅、手动更新React组件的DOM等，可看作`componentDidMount`、 `componentDidUpdate`  、 `componentWillUnmount`  的组合

1. 无需清除的effect

   在React更新DOM后执行额外代码，如发送网络请求、手动变更DOM等

   ```js
   useEffect(()=>{
       console.log('更新something')
   })
   ```

2. 需要清除的effect

   订阅了外部数据源的操作，为防止内存泄漏，需要清除，可以在调用useEffect时返回一个清除函数，React会在 组件卸载 时调用

   ```js
   useEffect(()=>{
       // subscribeSomething
       return () => {
           // unsubScribeSomething
       }
   })
   ```

3. 优化effect

   传递第二个参数，数组类型，添加依赖数据，当依赖数据变化时才执行effect操作，传递空数组表示只执行一次

   ```js
   useEffect(()=>{
       console.log('更新something')
   }, [count]) // 仅conut变化时才执行
   
   useEffect(()=>{
       console.log('更新一次')
   }, [name, age]) // 支持多个数据
   
   useEffect(()=>{
       console.log('更新一次')
   }, []) // 传空数组只执行一次
   ```

- 自定义Hook

  提取函数共享逻辑，以use开头，函数内部可调用其他Hook

