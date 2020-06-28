<template>
  <div>
    1、链表：
    <p>
      <a target="_blank" href="https://juejin.im/post/59479041a0bb9f006bdad7c3">
      https://juejin.im/post/59479041a0bb9f006bdad7c3</a>
    </p>
    <p>
      <a target="_blank" href="https://juejin.im/entry/59841a085188253d280e3c15">
      https://juejin.im/entry/59841a085188253d280e3c15</a>
    </p>
    <p>
      <a target="_blank" href="https://juejin.im/entry/58759e79128fe1006b48cdfd">
      https://juejin.im/entry/58759e79128fe1006b48cdfd</a>
    </p>
    
    <br />
    
    2、波兰式和逆波兰式：
    <p>
      <a target="_blank" href="http://www.cnblogs.com/chenying99/p/3675876.html">
      http://www.cnblogs.com/chenying99/p/3675876.html</a>
    </p>
    <p>
      <a target="_blank" href="https://github.com/Tairraos/rpn.js/blob/master/rpn.js">
      https://github.com/Tairraos/rpn.js/blob/master/rpn.js</a>
    </p>
  </div>
</template>
<script>

// 数据结构：链表就是相当于链条，而且每个地方都有一个节点
// 一个链表有头节点和尾节点，单链表、还有环形链表头尾相连、双向链表
// React hooks原理就是链表存储，根据顺序查找到对应的state

/*
let node1 = {
    data: 'node1',
    next: node2
}

let node2 = {
    data: 'node2',
    next: node3
}

let node3 = {
    data: 'node3',
    next: node4
}

...

1 ===>  2 ===> 3 ===> 4 ...
因为链表是无序的，所以删除、增加一个节点的时间复杂度都是O(1)
比如删除3  1 ===>  2  ===> 4 ...
*/

// 链表查找元素比较复杂

// 节点
class Node {
    constructor(element) {
        this.element = element,
        this.next = null
    }
}

// 链表
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
// 追加元素 
    append(element) {
        const node = new Node(element)
        let current = null
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }
// 任意位置插入元素 
    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(element)
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                this.head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            this.length++
            return true
        }
        return false
    }
    // 移除指定位置元素
    removeAt(position) {
        // 检查越界值
        if (position > -1 && position < length) {
                let current = this.head
                let previous = null
                let index = 0
                if (position === 0) {
                    this.head = current.next
                } else {
                    while (index++ < position) {
                        previous = current
                        current = current.next
                    }
                    previous.next = current.next
                }
                this.length--
                return current.element
            }
        return null 
    }
        // 寻找元素下标 
    findIndex(element) {
        let current = this.head
        let index = -1
        while (current) {
            if (element === current.element) {
                return index + 1
            }
            index++
            current = current.next
        }
        return -1 
    }

    // 删除指定文档 
    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    isEmpty() {
        return !this.length
    }
    size() {    
        return this.length
    }
    // 转为字符串 
    toString() {
        let current = this.head
        let string = ''
        while (current) {
            string += ` ${current.element}`
            current = current.next
        }
        return string
    }
}


import eventBus from './../../eventBus'

export default {
  name: 'linkedlist',
  mounted () {
    eventBus.$emit('tofather', 'jason')
  }
}
</script>
