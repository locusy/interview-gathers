<template>
    <div>
        <p>1、将json转成字符串拼接形式</p>
        <p>2、实现将str = 'a___b___d_ge'变成'a_b_d_ge'</p>
        <p>3、驼峰下划线转换</p>
        <p>4、下划线转换驼峰</p>
        <p>5、斐波那契数列（字节）</p>
        <p>6、序列化和反序列化</p>
        <p>7、二分法有什么限制条件（饿了么）</p>
        <p>8、你了解贪心算法、动态规划、分治算法、回溯算法等常见的算法吗？</p>
        <p>9、二分查找的时间复杂度怎么求。</p>
        <p>10、线性顺序存储，和链式存储结构上有什么区别以及优缺点。</p>
    </div>
</template>

<script>
    // 1、将json转成字符串拼接形式
        var json = {
            "name": "tianzhi",
            "password": "123",
            "code": "456"
        }
        var str = ''
        for (var attr in json) {
            str += attr + '=' + json[attr] + '&'
        }
        // var str = str.slice(0, str.lastIndexOf('&')-1)
        var str = str.substring(0, str.lastIndexOf('&') - 1)
        console.log(str)


    // 2、实现将str = 'a___b___d_ge'变成'a_b_d_ge'
        // var str = 'a___b___d_ge';
        // var arr = str.split('_')

        // function removeBlank(arr) {
        //     for (var i=0; i<arr.length; i++) {
        //         if (!arr[i]) {
        //             arr.splice(i, 1)
        //             removeBlank(arr)
        //         }
        //     }
        //     return arr
        // }
        // var arr1 = removeBlank(arr)
        // var str1 = arr.join('_')
        // console.log(str1)

    // 3、驼峰下划线转换
    function toLine(name) {
        return name.replace(/([A-Z])/g, "_$1").toLowerCase();
    }

    // 4、下划线转换驼峰
    function toHump(name) {
        return name.replace(/\_(\w)/g, function (all, letter) {
            console.log(all, letter);
            return letter.toUpperCase();
        });
    }

    // 5、斐波那契数列（字节）
        // 斐波那契数列：1,1,2,3,5,8,13,21,34,55,89,144...
        // 这个数列从第3项开始，每一项都等于前两项之和。
        // 显然这是一个线性递推数列。

        function fn(N) {
            let cache = []
            for(var i=0; i<=N; i++) {
                if(i == 0 || i == 1) {
                    cache[i] = i
                } else {
                    cache[i] = cache[i-1] + cache[i-2]
                }
            }
            console.log('cache:', cache[N])
        }

        // 字节跳动-2020面试题
        // 写出一个函数 function fn(index) {}
        // 输出fn(1) 1
        // fn(2) 1
        // fn(3) 2
        // fn(4) 3
        // fn(5) 5

        // fn(1)
        // fn(2)
        // fn(3)
        // fn(4)
        // fn(5)

    // 6、序列化和反序列化
    // 序列化
    // function Serialize(pNode) {
    //     var result = [];
    //     function preOrder(childNode) {
    //         if (!childNode) {
    //             result.push("#");
    //             return;
    //         }
    //         result.push(childNode.val);
    //         preOrder(childNode.left);
    //         preOrder(childNode.right);
    //     }
    //     preOrder(pNode);
    //     for (var i = result.length - 1; i >= 0; i--) {
    //         if (result[i] !== "#") {
    //             break;
    //         }
    //         result.pop();
    //     }
    //     return result.join();
    // }

    // 反序列化
    // function Deserialize(s) {
    //         if (!s) return;
    //         s = s.split(",");
    //         return deserlia(s);
    // }
    // function deserlia(arr) {
    //     if (arr.length === 0) return;
    //     let current = arr.shift();
    //     let node = null;
    //     if (current !== "#") {
    //         node = { val: current };
    //         node.left = deserlia(arr);
    //         node.right = deserlia(arr);
    //     }
    //     return node;
    // }

    // 7、二分法有什么限制条件（饿了么）

    // 8、你了解贪心算法、动态规划、分治算法、回溯算法等常见的算法吗？

    // 9、二分查找的时间复杂度怎么求。

    // 10、线性顺序存储，和链式存储结构上有什么区别以及优缺点。

    

    export default {
    }
</script>

<style lang="less" scoped>

</style>