<template>
    <div>

    </div>
</template>

<script>
    /**
     * 增删改查复杂度
     * 1、新增、查找、删除元素 O(1) 
     * 2、缺点：无序 空间复杂度高  数据冗余
     * 3、如果两个key的hash值相同，会产生碰撞，需要扩容
     */

    class HashTable {

        constructor() {
            this.table = []
        }

        // 散列函数
        static loseloseHashCode(key) {
            let hash = 0
            for (let codePoint of key) {
                hash += codePoint.charCodeAt()
            }
            return hash % 37
        }

        // 修改和增加元素
        put(key, value) {
            const position = HashTable.loseloseHashCode(key)
            console.log(`${position} - ${key}`)
            this.table[position] = value
        }

        get(key) {
            return this.table[HashTable.loseloseHashCode(key)]
        }

        remove(key) {
            this.table[HashTable.loseloseHashCode(key)] = undefined
        }
    }


    const hash = new HashTable()
    hash.put('Surmon', 'surmon.me@email.com') // 19 - Surmon
    hash.put('John', 'johnsnow@email.com') // 29 - John
    hash.put('Tyrion', 'tyrion@email.com') // 16 - Tyrion

    // 测试get方法
    // console.log(hash.get('Surmon')) // surmon.me@email.com
    // console.log(hash.get('Loiane')) // undefined
    // console.log(hash)

    export default {
        
    }
</script>

<style scoped>

</style>