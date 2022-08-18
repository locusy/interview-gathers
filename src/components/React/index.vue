<template>
    <div>
      <p>1、vue和react的区别？</p>
      <p>2、react性能优化点有哪些？</p>
      <p>3、说下React的生命周期</p>
      <p>4、react哪些生命周期只执行一次</p>
      <p>5、哪些地方调用setState</p>
      <p>6、react函数改变this指向的方式</p>
      <p>7、调用setState之后发生了什么？</p>
      <p>8、React中key的作用是什么？</p>
      <p>9、为什么虚拟dom会提高性能?(必考)</p>
      <p>10、react diff 原理（常考，大厂必考）</p>
      <p>11、路由传参方式：</p>
      <p>12、手动实现this的绑定的方法：</p>
      <p>13、组件间的通信方法：</p>
      <p>14、this.setState函数有三种用法：</p>
      <p>15、setState为什么是异步的</p>
      <p>16、setState变成同步</p>
      <p>17、阻止事件默认行为：</p>
      <p>18、前端不要操作cookie</p>
      <p>19、防止xss攻击</p>
      <p>20、在组件中获取真实dom</p>
      <p>21、容器型组件和展示型组件</p>
      <p>22、creat-react-app设置代理？</p>
      <p>23、权限控制：</p>
      <p>24、高阶组件：</p>
      <p>25、为什么要引入React</p>
      <p>26、为什么要用className而不用class</p>
      <p>27、为什么属性要用小驼峰</p>
      <p>28、为什么 constructor 里要调用 super 和传递 props</p>
      <p>29、为什么组件用大写开头</p>
      <p>30、为什么调用方法要 bind this</p>
      <p>31、为什么要 setState，而不是直接 this.state.xx = oo</p>
      <p>32、setState是同步还是异步相关问题</p>
      <p>33、重构代码需要考虑的问题有哪些？</p>
      <p>34、父组件怎么获取子组件的方法</p>
      <p>35、为什么要使用redux+immutable，redux和全局变量的区别</p>
      <p>36、react-redux的工作原理和相关源码</p>
      <p>37、setState的批量更新的问题</p>
      <p>38、前端监控sentry</p>
      <p>39、利用useMemo实现类似computed的功能</p>
      <p>40、PureComponent</p>
      <p>41、Redux应用的三大原则</p>
      <p>42、纯函数</p>
      <p>
        面试题合集：
        <a href="https://segmentfault.com/a/1190000016885832" target="_blank">
          https://segmentfault.com/a/1190000016885832
        </a>
        <br />
        <a href="https://mp.weixin.qq.com/s/I10nJpMGT2N-SBkHPES_TA" target="_blank">
          https://mp.weixin.qq.com/s/I10nJpMGT2N-SBkHPES_TA
        </a>
      </p>
    </div>
</template>

<script>
/*
  1、vue和react的区别？
    React生命周期和vue的区别
    Redux和vuex区别
    react和vue数据双向绑定区别

  2、react性能优化点有哪些？
    ···shouldComponentUpdate
      react在每个组件生命周期更新的时候都会调用一个shouldComponentUpdate(nextProps, nextState)函数。
      它的职责就是返回true或false，true表示需要更新，false表示不需要，默认返回为true，
      即便你没有显示地定义 shouldComponentUpdate 函数。
      这就不难解释上面发生的资源浪费了。
    ···使用纯组件PureComponent
    ···使用 React.memo 进行组件记忆
    ···懒加载组件
        import webpack
    ···使用 React Fragments 避免额外标记
    ···不要使用内联函数定义
    ···避免 componentWillMount()中的异步请求
    ···在Constructor的早期绑定函数
    ···使用唯一键迭代
    ···用 CSS 动画代替 JavaScript 动画
    ···React 组件的服务端渲染
    
  3、说下React的生命周期
    实例化
    getDefaultProps
    getInitialState
    constructor
    componentWillMount
    render
    componentDidMount
    存在期
    componentWillReceiveProps
    shouldComponentUpdate
    componentWillUpdate
    render
    componentDidUpdate
    销毁时
    componentWillUnmount：执行一些清理方法，如事件回收或是清除定时器。

  4、react哪些生命周期只执行一次
    getDefaultProps
    getInitialState
    componentWillMount
    componentDidMount
    componentWillUnmount

  5、哪些地方调用setState
    如果在 componentWillMount 中执行 setState 方法，会发生什么呢?组件会更新 state， 但组件只渲染一次。
    因此，这是无意义的执行，初始化时的 state 都可以放在 this.state。

    如果我们在 componentDidMount 中执行 setState 方法，又会发生什么呢?组件当然会再次更 新，
    不过在初始化过程就渲染了两次组件，这并不是一件好事。但实际情况是，有一些场景不得 不需要 setState，
    比如计算组件的位置或宽高时，就不得不让组件先渲染，更新必要的信息后， 再次渲染。
    new Promise((resolve) => {
      this.setState({ pageNumber });
      resolve()
    }).then(() => this.getSubjectLibList())

  6、react函数改变this指向的方式
    bind
    箭头函数

  7、调用setState之后发生了什么？
    在代码中调用 setState 函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。
    经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个 UI 界面。
    在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。
    在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

  8、React中key的作用是什么？（字节）
    Key是React用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识
    render () {
      return (
        <ul>
          {this.state.todoItems.map(({item, key}) => {
            return <li key={key}>{item}</li>
          })}
        </ul>
      )
    }
    在开发过程中，我们需要保证某个元素的key在其同级元素中具有唯一性。
    在React Diff算法中React会借助元素的Key值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。
    此外，React还需要借助Key值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中Key的重要性。

  9、为什么虚拟dom会提高性能?(必考)
    虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。

    用JavaScript对象结构表示DOM树的结构；
    然后用这个树构建一个真正的DOM树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。
    然后用新的树和旧的树进行比较，记录两棵树差异把 2 所记录的差异应用到步骤 1 所构建的真正的DOM树上，视图就更新了。

    使用的diff算法，diff算法有三种优化形式：
    tree diff：将新旧两颗DOM树按照层级遍历，只对同级的DOM节点进行比较，即同一父节点下的所有子节点，当发现节点已经不存在，则该节点及其子节点会被完全删除，不会进一步比较
    component diff：不同组件之间的对比，如果组件类型相同，暂不更新，否则删除旧的组件，再创建一个新的组件，插入到删除组件的位置
    element diff：在类型相同的组件内，再继续对比组件内部的元素。

    https://juejin.im/post/6844903529161850893

  10、react diff原理（常考，大厂必考）
    把树形结构按照层级分解，只比较同级元素。
    给列表结构的每个单元添加唯一的 key 属性，方便比较。
    React 只会匹配相同 class 的 component（这里面的class指的是组件的名字）
    合并操作，调用 component 的 setState 方法的时候, React将其标记为 dirty.
    到每一个事件循环结束, React检查所有标记dirty的component重新绘制.
    选择性子树渲染。开发人员可以重写shouldComponentUpdate提高diff的性能。

  11、路由传参方式：
    params 刷新也没
    this.props.history.push({
      pathname: '/manage',
      params: {
        id: item.id
      }
    })

    query：刷新就没
    this.props.history.push({
      pathname: '/create' ,
      query: {
        type: 'edit',
        id: item.id
      }
    })

    state：刷新就没有了
    this.props.history.push({
      pathname: '/manage',
      state: {
        id: item.id
      }
    })

    路径传参数 刷新还有
    pathname: '/edit/:id',

  12、手动实现this的绑定的方法：
     1）bind 方法：
        这个方法可以帮助我们绑定事件处理器内的 this ，并可以向事件处理器中传 5 递参数，比如:

        import React, { Component } from 'react';
        class App extends Component { 
          handleClick(e, arg) {
            console.log(e, arg); 
          }
          render() {
            // 通过bind方法实现，可以传递参数
            return <button onClick={this.handleClick.bind(this, 'test')}>Test</button>;
          } 
        }

        如果方法只绑定，不传参，那 stage 0 草案中提供了一个便捷的方案1——双冒号语法，其作 用与 this.handleClick.bind(this) 一致，并且 Babel 已经实现了该提案。比如:
        import React, { Component } from 'react';
        class App extends Component { 
          handleClick(e) {
            console.log(e); 
          }
          render() {
            return <button onClick={this.handleClick}>Test</button>;
          } 
        }

      2）构造器内声明：
        在组件的构造器内完成了 this 的绑定，这种绑定方式的好处在于仅需要 进行一次绑定，而不需要每次调用事件监听器时去执行绑定操作:
        import React, { Component } from 'react';
        class App extends Component {
          constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this); 
          }
          handleClick(e) { 
            console.log(e);
          }
          render() {
            return <button onClick={this.handleClick}>Test</button>;
          } 
        }

      3) 箭头函数：
        箭头函数不仅是函数的“语法糖”，它还自动绑定了定义此函数作用域的 this， 因此我们不需要再对它使用 bind 方法。比如，以下方式就能运行:
        import React, { Component } from 'react';

        class App extends Component {
          const handleClick = (e) => {
            console.log(e);
          };

          render() {
            return <button onClick={this.handleClick}>Test</button>;
          } 
        }
        或
        import React, { Component } from 'react';
        class App extends Component {
          handleClick(e) {
            console.log(e); 
          }
          render() {
            return <button onClick={() => this.handleClick()}>Test</button> 
          }
        }

        使用上述几种方式，都能够实现在类定义的组件中绑定 this 上下文的效果

  13、组件间的通信方法：
    props
    Events:
        发布/订阅模式来举例，这里借用 Node.js Events 模块的浏览器版实现。
        如果说程序中出现多级传递或跨级传递时， 那么首先要重新审视一下是否有更合理的方式。Pub/Sub 模式实现的过程非常容易理解，即利用 全局对象来保存事件，用广播的方式去处理事件。这种常规的设计方法在软件开发中处处可见， 但这种模式带来的问题就是逻辑关系混乱。
        新建一个event.js文件：
        import { EventEmitter } from 'events'; 
        export default new EventEmitter();

        用法：
        父组件定义函数
        import emitter from '@/utils/event';
        componentDidMount() {
          emitter.on('globalChange', function(data) {
            console.log('layout:', data)
          })
        }

        子组件触发函数并传参数
        componentDidMount() {
          emitter.emit('globalChange', 'data from children')
        }
    redux
    
  14、this.setState函数有三种用法：
    // 对象
    this.setState({
    })

    // 函数，一般是用于在setState之前做一些操作
    this.setState(
      () => {
        // TODO
        console.log('')
        return {
          a:300
        }
      }
    )

    // 第二个参数，一般是用于在setState之后做一些操作
    this.setState({
      a:300
    }, () => {
      // TODO
    })

  15、setState为什么是异步的
    https://www.jianshu.com/p/cc12e9a8052c
    setState在react里的合成事件和钩子函数中是“异步”的。
    setState在原生事件和setTimeout中是同步的。

  16、setState变成同步
    http://cnblogs.com/zhuotiabo/p/6265172.html
    https://www.cnblogs.com/jiuyi/p/9263114.html

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log->0

    this.setState({val: this.state.val + 9});
    console.log(this.state.val);    // 第 2 次 log->0

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log->10

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log->11
    }, 0);


    第一种：回调函数
        this.setState({count:1},()=>{
          console.log(this.state.count)//输出count=1
        });
    第二种：放在setTimeout里面
        this.setState({val: this.state.val + 9});
        setTimeout(function () {
          console.log(this.state.val) //获取改变后的val
        }, 0);
    第三种：es7的async/await
        var delay = function (time) {
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve();
            }, time);
          })
        };
        var start = async function () {
          console.log('a');
          await delay(2000);
          console.log('b');
        };
        start(); //先输出a，稍等2秒后，输出了b

        Promise来封装setState:
        setStateAsync(state) {
          return new Promise((resolve) => {
            this.setState(state, resolve)
          });
        }
        async componentDidMount() {
          await this.setStateAsync({count: 1});
          console.log(this.state.count);//输出count=1
        }
    

  17、阻止事件默认行为：
    在 React 中你不能通过返回 false 来阻止默认行为。必须明确调用 preventDefault 。

  18、前端不要操作cookie
    在做一些前后端鉴权的时候，后端应该开启domain,secure,httponly严格模式，禁止前端操作cookie，防止csrf攻击。

  19、防止xss攻击
      input，textarea 等标签，不要直接把 html 文本直接渲染在页面上,使用 xssb 等过滤之后再输出到标签上;
      import { html2text } from 'xss';
      render(){
        <div
          dangerouslySetInnerHTML={{
            __html: html2text(htmlContent)
          }}
        />
      }

  20、在组件中获取真实dom
      使用 16 版本后的 createRef()函数：
      class MyComponent extends React.Component<iProps, iState> {
        constructor(props) {
          super(props);
          this.inputRef = React.createRef();
        }

        render() {
          return <input type="text" ref={this.inputRef} />;
        }

        componentDidMount() {
          this.inputRef.current.focus();
        }
      }

  21、容器型组件和展示型组件
      含有抽象数据而没有业务逻辑的组件，我们 称之为容器型组件(container component);
      而没有数据请求逻辑只有业务逻辑的组件，我们称之 为展示型组件(presentational component)
  
  22、creat-react-app设置代理？
      （1）在package.json里面添加：
          "proxy": {
            "/v1": {
              "target": "http://172.16.5.148:8001",
              "changeOrigin": true,
              "secure": false
            }
          },
      （2）在新建src/setupProxy.js文件：
          const proxy = require("http-proxy-middleware");
          module.exports = function(app) {
            app.use(
              proxy("/v1", {
                "target": "http://172.16.5.148:8001",   //马健
                "changeOrigin": true,
                "secure": false
              })
            );
            // app.use(
            //   proxy("/v1", {
            //     "target": "http://172.16.5.148:8001",   //
            //     "changeOrigin": true,
            //     "secure": false
            //   })
            // );
          };

          在scripts/start.js将文件引入：
          const devServer = new WebpackDevServer(compiler, serverConfig);
          require('../src/setupProxy')(devServer);

  23、权限控制：
      https://www.jianshu.com/p/1a5ba1731474
      https://www.jianshu.com/p/508a2d4cb143
      https://segmentfault.com/a/1190000008829420

      登录权限
      路由权限
      页面级的权限
      元素级的权限：高阶组件
      vue权限控制-自定义指令

  24、高阶组件：
      高阶组件可以看做是装饰器模式(Decorator Pattern)在React的实现。
      即允许向一个现有的对象添加新的功能，同时又不改变其结构，属于包装模式(Wrapper Pattern)的一种

  25、为什么要引入React
      在写 React 的时候，你可能会写类似这样的代码：

      import React from 'react'

      function A() {
        // ...other code
        return <h1>前端桃园</h1>
      }
      你肯定疑惑过，下面的代码都没有用到 React，为什么要引入 React 呢？

      如果你把 import React from ‘react’ 删掉，还会报下面这样的错误：

      那么究竟是哪里用到了这个 React，导致我们引入 React 会报错呢，不懂这个原因，那么就是 JSX 没有搞得太明白。

      你可以讲上面的代码(忽略导入语句)放到在线 babel 里进行转化一下，发现 babel 会把上面的代码转化成:

      function A() {
        // ...other code
        return React.createElement("h1", null, "前端桃园");
      }
      因为从本质上讲，JSX 只是为 React.createElement(component, props, ...children) 函数提供的语法糖。

  26、为什么要用className而不用class
      React 一开始的理念是想与浏览器的 DOM API 保持一直而不是 HTML，因为 JSX 是 JS 的扩展，而不是用来代替 HTML 的，这样会和元素的创建更为接近。在元素上设置 class 需要使用 className 这个 API：

      const element = document.createElement("div")
      element.className = "hello" 
      浏览器问题，ES5 之前，在对象中不能使用保留字。以下代码在 IE8 中将会抛出错误：

      const element = {
        attributes: {
          class: "hello"
        }
      } 
      解构问题，当你在解构属性的时候，如果分配一个 class 变量会出问题：

      const { class } = { class: 'foo' } // Uncaught SyntaxError: Unexpected token }
      const { className } = { className: 'foo' } 
      const { class: className } = { class: 'foo' } 
      其他讨论可见：有趣的话题，为什么jsx用className而不是class

  27、为什么属性要用小驼峰
      因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

  28、为什么 constructor 里要调用 super 和传递 props
      这是官网的一段代码，具体见：状态(State) 和 生命周期

      class Clock extends React.Component {
        constructor(props) {
          super(props);
          this.state = {date: new Date()};
        }

        render() {
          return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
        }
      }

      为什么要调用 super
      其实这不是 React 的限制，这是 JavaScript 的限制，在构造函数里如果要调用 this，那么提前就要调用 super，在 React 里，我们常常会在构造函数里初始化 state，this.state = xxx ，所以需要调用 super。

      为什么要传递 props
      你可能以为必须给 super 传入 props，否则 React.Component 就没法初始化 this.props：

      class Component {
        constructor(props) {
          this.props = props;
          // ...
        }
      }
      不过，如果你不小心漏传了 props，直接调用了 super()，你仍然可以在 render 和其他方法中访问 this.props（不信的话可以试试嘛）。

      为啥这样也行？因为React 会在构造函数被调用之后，会把 props 赋值给刚刚创建的实例对象：

      const instance = new YourComponent(props);
      instance.props = props;
      props 不传也能用，是有原因的。

      但这意味着你在使用 React 时，可以用 super() 代替 super(props) 了么？

      那还是不行的，不然官网也不会建议你调用 props 了，虽然 React 会在构造函数运行之后，为 this.props 赋值，但在 super() 调用之后与构造函数结束之前， this.props 仍然是没法用的。

      // Inside React
      class Component {
        constructor(props) {
          this.props = props;
          // ...
        }
      }

      // Inside your code
      class Button extends React.Component {
        constructor(props) {
          super(); // 😬 忘了传入 props
          console.log(props); // ✅ {}
          console.log(this.props); // 😬 undefined
        }
        // ...
      }
      要是构造函数中调用了某个访问 props 的方法，那这个 bug 就更难定位了。因此我强烈建议始终使用super(props)，即使这不是必须的：

      class Button extends React.Component {
        constructor(props) {
          super(props); // ✅ We passed props
          console.log(props); // ✅ {}
          console.log(this.props); // ✅ {}
        }
        // ...
      }
      上面的代码确保 this.props 始终是有值的。

      如果你想避免以上的问题，你可以通过class 属性提案 来简化代码：

      class Clock extends React.Component {
        state = {date: new Date()};

        render() {
          return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
        }
      }
      更详细的内容可见Dan 的博客

  29、为什么组件用大写开头
      前面以及说过了，JSX 是 React.createElement(component, props, …children) 提供的语法糖，component 的类型是：string/ReactClass type，我们具体看一下在什么情况下会用到 string 类型，什么情况下用到 ReactClass type 类型

      string 类型react会觉得他是一个原生dom节点

      ReactClass type 类型 自定义组件

      例如（string）：在 jsx 中我们写一个

      <div></div>
      转换为js的时候就变成了

      React.createElement("div", null)
      例如（ReactClass type）：在jsx中我们写一个

      function MyDiv() {
          return (<div><div>)
      }
      <MyDiv></MyDiv>
      转换为js的时候就变成了

      function MyDiv() {
        return React.createElement("div", null);
      }

      React.createElement(MyDiv, null);
      上边的例子中如果将MyDiv中的首字母小写，如下

      function myDiv() {
          return (<div><div>)
      }
      <myDiv></myDiv>
      转换为 js 的时候就变成了

      function MyDiv() {
        return React.createElement("div", null);
      }

      React.createElement("myDiv", null);
      由于找不到 myDiv 这个 dom，所以就会报错。
  
  30、为什么调用方法要 bind this
      前提知识：深刻的理解 JavaScript 中的 this

      相信刚写 React 的时候，很多朋友可能会写类似这样的代码：

      class Foo extends React.Component {
        handleClick () {
          this.setState({ xxx: aaa })
        }

        render() {
          return (
            <button onClick={this.handleClick}>
              Click me
            </button>
          )
        }
      }
      发现会报 this 是 undefined 的错，然后可能对事件处理比较疑惑，然后去看官网的事件处理有下面一段话：

      你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。

      这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。

      然后你看了官网的例子和建议之后，知道需要为事件处理函数绑定 this就能解决，想下面这样：

      class Foo extends React.Component {
        handleClick () {
          this.setState({ xxx: aaa })
        }

        render() {
          return (
            <button onClick={this.handleClick.bind(this)}>
              Click me
            </button>
          )
        }
      }
      但是可能你没有去思考过为什么需要 bind this？如果你不能理解的话，还是 js 的基础没有打好。

      React 是如何处理事件的？

      咱们先来了解一下 React 是如何处理事件的。

      React 的事件是合成事件， 内部原理非常复杂，我这里只把关键性，可以用来解答这个问题的原理部分进行介绍即可(后面应该会写一篇 react 的事件原理，敬请期待)。

      上篇文章已经说过，jsx 实际上是 React.createElement(component, props, …children) 函数提供的语法糖，那么这段 jsx 代码：

      <button onClick={this.handleClick}>
          Click me
      </button>
      会被转化为：

      React.createElement("button", {
          onClick: this.handleClick
      }, "Click me")
      了解了上面的，然后简单的理解 react 如何处理事件的，React 在组件加载(mount)和更新(update)时，将事件通过 addEventListener  统一注册到 document 上，然后会有一个事件池存储了所有的事件，当事件触发的时候，通过 dispatchEvent 进行事件分发。

      所以你可以简单的理解为，最终 this.handleClick 会作为一个回调函数调用。

      理解了这个，然后再来看看回调函数为什么就会丢失 this。

      this 简单回顾

      在函数内部，this的值取决于函数被调用的方式。

      如果你不能理解上面那句话，那么你可能需要停下来阅读文章，去查一下相关资料，否则你可能看不懂下面的，如果你懒的话，就看为你准备好的 MDN 吧。

      通过上面对事件处理的介绍，来模拟一下在类组件的 render 函数中， 有点类似于做了这样的操作:

      class Foo {
          sayThis () {
              console.log(this); // 这里的 `this` 指向谁？
          }

          exec (cb) {
              cb();
          }

          render () {
              this.exec(this.sayThis);
          }
      }

      var foo = new Foo();
      foo.render(); // 输出结果是什么？
      你会发现最终结果输出的是 undefined，如果你不理解为什么输出的是 undefined，那么还是上面说的，需要去深刻的理解 this 的原理。如果你能理解输出的是 undefined，那么我觉得你就可以理解为什么需要 bind this 了。

      那么你可能会问：为什么React没有自动的把 bind 集成到 render 方法中呢?在 exec 调用回调的时候绑定进去，像这样：

      class Foo {
          sayThis () {
              console.log(this); // 这里的 `this` 指向谁？
          }

          exec (cb) {
              cb().bind(this);
          }

          render () {
              this.exec(this.sayThis);
        }
      }

      var foo = new Foo();
      foo.render(); // 输出结果是什么？
      因为 render 多次调用每次都要 bind 会影响性能，所以官方建议你自己在 constructor 中手动 bind 达到性能优化。

      四种事件处理对比
      对于事件处理的写法也有好几种，咱们来进行对比一下：

      1. 直接 bind this 型

      就是像文章开始的那样，直接在事件那里 bind this

      class Foo extends React.Component {
        handleClick () {
          this.setState({ xxx: aaa })
        }

        render() {
          return (
            <button onClick={this.handleClick.bind(this)}>
              Click me
            </button>
          )
        }
      }
      优点：写起来顺手，一口气就能把这个逻辑写完，不用移动光标到其他地方。

      缺点：性能不太好，这种方式跟 react 内部帮你 bind 一样的，每次 render 都会进行 bind，而且如果有两个元素的事件处理函数式同一个，也还是要进行 bind，这样会多写点代码，而且进行两次 bind，性能不是太好。(其实这点性能往往不会是性能瓶颈的地方，如果你觉得顺手，这样写完全没问题)

      2. constuctor 手动 bind 型

      class Foo extends React.Component {
        constuctor(props) {
          super(props)
          this.handleClick = this.handleClick.bind(this)
        }
        handleClick () {
          this.setState({ xxx: aaa })
        }

        render() {
          return (
            <button onClick={this.handleClick}>
              Click me
            </button>
          )
        }
      }
      优点：相比于第一种性能更好，因为构造函数只执行一次，那么只会 bind 一次，而且如果有多个元素都需要调用这个函数，也不需要重复 bind，基本上解决了第一种的两个缺点。

      缺点：没有明显缺点，硬要说的话就是太丑了，然后不顺手(我觉得丑，你觉得不丑就这么写就行了)。

      3. 箭头函数型

      class Foo extends React.Component {
        handleClick () {
          this.setState({ xxx: aaa })
        }

        render() {
          return (
            <button onClick={(e) => this.handleClick(e)}>
              Click me
            </button>
          )
        }
      }
      优点：顺手，好看。

      缺点：每次 render 都会重复创建函数，性能会差一点。

      4. public class fields 型

      这种 class fields还处于实验阶段，据我所知目前还没有被纳入标准，具体可见这里。

      class Foo extends React.Component {
        handleClick = () => {
          this.setState({ xxx: aaa })
        }

        render() {
          return (
            <button onClick={this.handleClick}>
              Click me
            </button>
          )
        }
      }
      优点：好看，性能好。

      缺点：没有明显缺点，如果硬要说可能就是要多装一个 babel 插件来支持这种语法。

      总结
      我平时用的就这四种写法，我这边从代码的美观性、性能以及是否顺手方便对各种写法做了简单的对比。其实每种方法在项目里用都是没什么问题的，性能方面基本上可以忽略，对于美观性和顺手比较主观，所以总体来说就是看大家的偏好咯，如果硬要推荐的话，我还是比较推荐第四种写法，美观而且不影响性能。

  31、为什么要 setState，而不是直接 this.state.xx = oo
      这个问题是我们公司后端写 React 的时候提出的问题，为啥不能直接修改 state，要 setState 一下。我在想，从 vue 转到 React 可能也会有这种疑问，因为 vue 修改状态都是直接改的。

      如果我们了解 setState 的原理的话，可能就能解答这个问题了，setState 做的事情不仅仅只是修改了 this.state 的值，另外最重要的是它会触发 React 的更新机制，会进行 diff ，然后将 patch 部分更新到真实 dom 里。

      如果你直接 this.state.xx == oo 的话，state 的值确实会改，但是改了不会触发 UI 的更新，那就不是数据驱动了。

      那为什么 Vue 直接修改 data 可以触发 UI 的更新呢？因为 Vue 在创建 UI 的时候会把这些 data 给收集起来，并且在这些 data 的访问器属性 setter 进行了重写，在这个重写的方法里会去触发 UI 的更新。如果你想更多的了解 vue 的原理，可以去购买染陌大佬的剖析 Vue.js 内部运行机制。

      不明白访问器属性的可以看这篇文章：深入理解JS里的对象
  
  32、setState是同步还是异步相关问题
      1. setState 是同步还是异步？

        我的回答是执行过程代码同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，所以表现出来有时是同步，有时是“异步”。

      2. 何时是同步，何时是异步呢？

        只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout/setInterval等原生 API 中都是同步的。简单的可以理解为被 React 控制的函数里面就会表现出“异步”，反之表现为同步。

      3. 那为什么会出现异步的情况呢？

        为了做性能优化，将 state 的更新延缓到最后批量合并再去渲染对于应用的性能优化是有极大好处的，如果每次的状态改变都去重新渲染真实 dom，那么它将带来巨大的性能消耗。

      4. 那如何在表现出异步的函数里可以准确拿到更新后的 state 呢？

        通过第二个参数 setState(partialState, callback) 中的 callback 拿到更新后的结果。

        或者可以通过给 setState 传递函数来表现出同步的情况：

        this.setState((state) => {
          return { val: newVal }
        })
      5. 那表现出异步的原理是怎么样的呢？

        直接讲源码肯定篇幅不够，可以看这篇文章：你真的理解setState吗？。

        我这里还是用最简单的语言让你理解：在 React 的 setState 函数实现中，会根据 isBatchingUpdates(默认是 false) 变量判断是否直接更新 this.state 还是放到队列中稍后更新。然后有一个 batchedUpdate 函数，可以修改 isBatchingUpdates 为 true，当 React 调用事件处理函数之前，或者生命周期函数之前就会调用 batchedUpdate 函数，这样的话，setState 就不会同步更新 this.state，而是放到更新队列里面后续更新。

        这样你就可以理解为什么原生事件和 setTimeout/setinterval 里面调用 this.state 会同步更新了吧，因为通过这些函数调用的 React 没办法去调用 batchedUpdate 函数将 isBatchingUpdates 设置为 true，那么这个时候 setState 的时候默认就是 false，那么就会同步更新。

        最后 setState 是 React 非常重要的一个方法，值得大家好好去研究一下他的原理。

  33、重构代码需要考虑的问题有哪些？
        代码规范，统一：提高可理解性
        代码架构：降低修改成本
        性能瓶颈

  34、父组件怎么获取子组件的方法
      父组件：
        class Father extends Component {
          onRef = (ref) => {
            this.content = ref
          }

          handleClick = () => {
            this.content.update()
          }

          render() {
            return (
              <div>
                <button onClick={this.handleClick}></button>
                <Child onRef={this.onRef} />
              </div>
            )
          }
        }

       子组件：
        class Child extends Component {
          componentDidMounted() {
            this.props.onRef(this)
          }
          update() {
            console.log('update...')
          }
        }

    35、为什么要使用redux+immutable，redux和全局变量的区别

    36、react-redux的工作原理和相关源码

    37、setState的批量更新的问题
        setState 有两种使用方法。第一种方法是传入一个对象作参数。第二种方法是传入一个函数作参数。
        你知道这两种方法分别应该在什么时候使用吗？
        例如，如果你有一个可以启用或禁用的按钮，那么你可能会有一个名为 isDisabled 的状态，其中包含一个布尔值。
        如果你想切换这个按钮的状态，你可能很会写这样的一段代码：
        // setState 使用一个对象作参数
        this.setState({ isDisabled: !this.state.isDisabled })

        那么，这有什么问题呢？问题在于 React 状态更新可以批处理（batchUpdate），这意味着多个状态更新可以在一个更新周期中发生。如果你的更新将被批处理，并且你对 isDisabled 状态有多个更新，那么最终结果可能不是你所期望的。
        更新状态的更正确的方法是提供前一个状态的函数作为参数:
        this.setState(prevState => ({ isDisabled: !prevState.isDisabled }))

        现在，即使你的状态更新被批处理，并且有多个更新都在操作 isDisabled 状态，但每个更新都依赖于正确的先前状态，因此你总是会得到预期的结果。

        类似的递增计数器也是如此。
        // 不要这样做
        this.setState({ counterValue: this.state.counterValue + 1 })
        // 正确的写法
        this.setState(prevState => ({ counterValue: prevState.counterValue + 1 }))

    38、前端监控sentry
        https://docs.sentry.io/platforms/javascript/react/

        import * as Sentry from '@sentry/react';
        Sentry.init({dsn: "http://73c2b3e82a96434ba7c9dc3d92f123de@sentry.yunduoketang.com/6"});

        http://sentry.yunduoketang.com/sentry/react-91/issues/49/?query=is%3Aunresolved
        xucong@yuuxin.com 12345

    39、利用useMemo实现类似computed的功能
        import React, { useState, useMemo } from 'react';

        function Example(props) {
          const [firstName, setFirstName] = useState('');
          const [lastName, setLastName] = useState('');
          // 使用 useMemo 函数缓存计算过程
          const renderFullName = useMemo(() => `${firstName} ${lastName}`, [
            firstName,
            lastName,
          ]);

          return <div>{renderFullName}</div>;
        }

    40、PureComponent
        PureComponent：react组件无论state或者props是否改变都会重绘 为了提高性能
        React创建了PureComponent组件创建了默认的shouldComponentUpdate行为。
        这个默认的shouldComponentUpdate行为会一一比较props和state中所有的属性，只有当其中任意一项发生改变是，才会进行重绘。shouldComponentUpdate默认返回true
        需要注意的是，PureComponent使用浅比较判断组件是否需要重绘

        https://www.jianshu.com/p/33cda0dc316a

        class Comment extends PureComponent {
          继承自PureComponent的组件不用我们手动去判断prop和state，所以不需要在PureComponent组件中使用shouldComponentUpdate
          render() {
            console.log("render comment");
            const {body, author} = this.props;
            return (
              <div>
                <p>{body}</p>
                <p> --- {author}</p>
              </div>
            );
          }
        }

        以上组件等同于：
        class Comment extends Component {
          shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.data.body === this.props.data.body && 
                nextProps.data.author === this.props.data.author) {
                return false;
            }
            return true;
          }
            
          render() {
            console.log("render comment");
            const {body, author} = this.props;
            return (
              <div>
                <p>{body}</p>
                <p> --- {author}</p>
              </div>
            );
          }
        }

    41、Redux应用的三大原则
      单一数据源
        我们可以把Redux的状态管理理解成一个全局对象，那么这个全局对象是唯一的，所有的状态都在全局对象store下进行统一”配置”，这样做也是为了做统一管理，便于调试与维护。
      State是只读的
        与React的setState相似，直接改变组件的state是不会触发render进行渲染组件的。同样，在Redux中唯一改变state的方法就是触发action，action是一个用于描述发生了什么的“关键词”，而具体使action在state上更新生效的是reducer，用来描述事件发生的详细过程，reducer充当了发起一个action连接到state的桥梁。这样做的好处是当开发者试图去修改状态时，Redux会记录这个动作是什么类型的、具体完成了什么功能等（更新、传播过程），在调试阶段可以为开发者提供完整的数据流路径。

        首先，react 组件从 store 中获取原始的数据，然后渲染。当 react 中的数据发生改变时，react 就需要使用 action，让 action 携带新的数据值派发给 store，store 把 action 发给 reducer 函数，reducer 函数处理新的数据然后返回给 store，最后 react 组件拿到更新后的数据渲染页面，达到页面更新的目的。
      Reducer必须是一个纯函数
        Reducer用来描述action如何改变state，接收旧的state和action，返回新的state。Reducer内部的执行操作必须是无副作用的，不能对state进行直接修改，当状态发生变化时，需要返回一个全新的对象代表新的state。这样做的好处是，状态的更新是可预测的，另外，这与Redux的比较分发机制相关，阅读Redux判断状态更新的源码部分(combineReducers)，发现Redux是对新旧state直接用==来进行比较，也就是浅比较，如果我们直接在state对象上进行修改，那么state所分配的内存地址其实是没有变化的，“==”是比较对象间的内存地址，因此Redux将不会响应我们的更新。之所以这样处理是避免对象深层次比较所带来的性能损耗（需要递归遍历比较）。

    42、纯函数
      一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。
      在执行过程里面没有副作用：除了修改外部的变量，一个函数在执行过程中还有很多方式产生外部可观察的变化，比如说调用 DOM API 修改页面，或者你发送了 Ajax 请求，还有调用 window.reload 刷新浏览器，甚至是 console.log 往控制台打印数据也是副作用。

*/

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>