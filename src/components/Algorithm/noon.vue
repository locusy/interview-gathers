<template>
  <div>

  </div>
</template>

<script>
  export default {
    mounted() {
      // “回文串”是一个正读和反读都一样的字符串
      
      // 方法一：递归
      function justy(str) {
        let first = str.slice(0, 1)
        let last = str.slice(str.length - 1)
        let flag
        if(str.length >= 1) {
          if(first == last) {
            flag = true

            let result = str.slice(1, str.length - 1)
            if(result.length > 1) {
              justy(result)
            }
          } else {
            flag = false
          }
        }

        return flag
      }
      console.log(justy('aba'))
      console.log(justy('abba'))
      console.log(justy('abcba'))



      // 方法二：for循环
      // 写法1:
      function Palindromes(str) {
          let reg = /[\W_]/g;
          let newStr = str.replace(reg, '').toLowerCase();
          for(let i = 0, len = Math.floor(newStr.length / 2); i < len; i++) {
              if(newStr[i] !== newStr[newStr.length - 1 - i]) return false;
          }
          return true;
      }
      
      // 写法2:
      function Palindromes(str) {
          let reg = /[\W_]/g;
          let newStr = str.replace(reg, '').toLowerCase();
          let len = newStr.length;
          for(let i = 0, j = len - 1; i < j; i++, j--) { // i < j
              console.log('---');
              if(newStr[i] !== newStr[j]) return false;
          }
          return true;
      }

      
    }
  }
</script>

<style lang="scss" scoped>

</style>