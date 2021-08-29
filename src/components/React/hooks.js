import React, { useState, useEffect, useReducer, useContext, useMemo, useCallback } from 'react';

// hook概念：
// https://zh-hans.reactjs.org/docs/hooks-intro.html
// 1、Hook使你在无需修改组件结构的情况下复用状态逻辑；React需要为共享状态逻辑提供更好的原生途径
// 2、Hook 将组件中相互关联的部分拆分成更小的函数
// 3、Hook 使你在非class的情况下可以使用更多的React特性。
//   从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。
const Context = React.createContext();

function fruitReducer(state, action) {
    switch(action.type) {
        case 'init':
            return action.payload;
        case 'add':
            return [...state, action.payload];
        default:
            return state
    }
}

function FruitAdd() {
    // 4、useContext
    const { dispatch } = useContext(Context)
    const [name, setName] = useState("")

    const handleEnter = e => {
        if(e.key == "Enter") {
            dispatch({type: 'add', payload: name})
            setName("")
        }
    }

    return (
        <input 
            type="text"
            value={name} 
            onChange={e => setName(e.target.value)} 
            onKeyDown={handleEnter} 
        />
    )
}

export default function myHook() {
    // 1、useState：状态钩子
    const [fruit, setFruit] = useState('草莓')
    // const [fruits, setFruits] = useState([])


    // 2、useReducer：useState的可选项，常用于有复杂状态逻辑时，类似于redux中的reducer
    const [fruits, dispatch] = useReducer(fruitReducer, [])


    // 3、useEffect：副作用钩子
    // 基本用法
    useEffect(() => {
        setTimeout(() => {
            // setFruits(['芒果', '猕猴桃'])
            dispatch({type: 'init', payload: ['芒果', '猕猴桃']})
            console.log(fruits)
        }, 3000)
    }, [])

    // 设置依赖：请务必设置依赖选项，如果没有则设置空数组表示仅执行一次
    useEffect(() => {
        document.title = fruit
    }, fruit)

    // 清除工作：防止内存泄漏
    useEffect(() => {
        let timer = setInterval(() => {
            console.log('fruit:', fruit)
        }, 1000)

        return function() {
            clearInterval(timer)
        }
    }, [])


    // 5、useCallback
    // 功能和useMemo差不多
    const [a, setA] = useState('1')
    const [b, setB] = useState('2')
    const memoizedCallback = useCallback(
        `${a}-${b}`,
        [a, b],
    )

    // 6、useMemo
    // 相当于vue的computed
    // 仅会在某个依赖项改变时才重新计算 memoized 值。
    // 这种优化有助于避免在每次渲染时都进行高开销的计算。
    const [firstName, setFirstName] = useState('tian')
    const [secondName, setSecondName] = useState('zhi')
    const memoizedName = useMemo(() => `${firstName}-${secondName}`, [firstName, secondName])

    return (
        <Context.Provider value={{ fruits, dispatch }}>
            <div>
                {fruit}
                <button onClick={() => setFruit("西瓜")}>设置</button>
                <button onClick={() => setFruit("草莓")}>重置</button>

                <br/>

                <ul>
                    {fruits.map((item, index) => 
                        <li key={index} onClick={() => setFruit(item)}>{item}</li>
                    )}
                </ul>
                {/* <button onClick={() => dispatch({type: 'add', payload: ['香蕉']})}>添加</button> */}
                <FruitAdd />

                <p onClick={() => {setA('a changed');setB('b changed')}}>handle</p>
                <p>{memoizedCallback}</p>

                <p onClick={() => {setFirstName('jing');setSecondName('tian')}}>name</p>
                <p>{memoizedName}</p>

            </div>
        </Context.Provider>
    )
}






