
<template>
    <div>
        <p>两数之和：给定一个数组，找出数组中相加为10的两个数</p>
        <p>leetcode14：最长公共前缀</p>
        <p>leetcode21：合并两个有序链表</p>
        <p>leetcode88：合并两个有序数组</p>
        <p>leetcode：LRU缓存机制</p>
        <p>
            <section>总结：</section>
            <a href="https://blog.csdn.net/yy2017220302028/article/details/104394877" target="_blank">
                https://blog.csdn.net/yy2017220302028/article/details/104394877
            </a>
        </p>
        <p>
            <a href="https://blog.csdn.net/yy2017220302028/article/details/105562435" target="_blank">
                https://blog.csdn.net/yy2017220302028/article/details/105562435
            </a>
        </p>
    </div>
</template>

<script>

// 两数之和：给定一个数组，找出数组中相加为10的两个数
    var arr = [1,7,4,3,6,5,2,8]
    var target = 10

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // 第一种：两层遍历 大概次数是n*n 
    // 时间复杂度为O(n^2) 如果数组的长度为10000则会崩溃
    // 空间复杂度O(1)
    var numAdd = function(nums, target) {
        for(var i=0; i<nums.length; i++) {
            for(var j=i; j<nums.length; j++) {
                if(arr[i] + arr[j] == target && i!=j) {
                    return [arr[i], arr[j]]
                }
            }
        }
    }
    // console.time('numAdd')
    // console.log('target', numAdd(arr, target))
    // console.timeEnd('numAdd')

    // 第二种：一层遍历 时间复杂度O(n) 空间复杂度O(n)
    var numBest = function(nums, target) {
        let obj = {}
        for(var i=0; i<nums.length; i++) {
            let num = nums[i]
            if(obj[num]) {
                return [obj[num], num]
            } else {
                obj[target - num] = num
            }
        }
    }
    // var numBest = function(nums, target) {
    //     let map = new Map()
    //     for(let i = 0; i< nums.length; i++) {
    //         let k = target-nums[i]
    //         if(map.has(k)) {
    //             return [map.get(k), i]
    //         }
    //         map.set(nums[i], i)
    //     }
    //     return [];
    // };
    // console.time('numBest')
    // console.log('target', numBest(arr, target))
    // console.timeEnd('numBest')

// leetcode14：最长公共前缀

// leetcode21：合并两个有序链表

// leetcode88：合并两个有序数组

// leetcode：LRU缓存机制
    // vue的keep-alive算法：
    // 在 keep-alive 缓存超过 max 时，使用的缓存淘汰算法就是 LRU 算法，它在实现的过程中用到了 cache 对象用于保存缓存的组件实例及 key 值，keys 数组用于保存缓存组件的 key ，当 keep-alive 中渲染一个需要缓存的实例时：

    // 1、判断缓存中是否已缓存了该实例，缓存了则直接获取，并调整 key 在 keys 中的位置（移除 keys 中 key ，并放入 keys 数组的最后一位）
    // 2、如果没有缓存，则缓存该实例，若 keys 的长度大于 max （缓存长度超过上限），则移除 keys[0] 缓存

    // --------------------------------------------------
    // 下面就是LRU算法了，
    // 如果在缓存里有则调整，
    // 没有则放入（长度超过max，则淘汰最近没有访问的）
    // --------------------------------------------------
    // 如果命中缓存，则从缓存中获取 vnode 的组件实例，
    // 并且调整 key 的顺序放入 keys 数组的末尾
    if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
    }
    // 如果没有命中缓存,就把vnode放进缓存
    else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        // 如果配置了 max 并且缓存的长度超过了 this.max，还要从缓存中删除第一个
        if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
    }
// --------------------------------------------------


    export default {
        mounted() {
        }
    }
</script>

<style lang="less" scoped>

</style>