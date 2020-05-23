<template>
  <div id="QuickSort">
    <p>
      1、快速排序
      <a target="_blank" href="https://segmentfault.com/a/1190000009426421">
      https://segmentfault.com/a/1190000009426421</a>
    </p>

    <p>
      2、希尔排序
      <a target="_blank" href="https://segmentfault.com/a/1190000009461832">
      https://segmentfault.com/a/1190000009461832</a>
    </p>

    <p>
      3、选择排序
      <a target="_blank" href="https://segmentfault.com/a/1190000009366805">
      https://segmentfault.com/a/1190000009366805</a>
    </p>

    <p>
      4、冒泡排序
      <a target="_blank" href="https://segmentfault.com/a/1190000010944422">
      https://segmentfault.com/a/1190000010944422</a>
    </p>

    <p>
      5、归并排序
      <a target="_blank" href="https://segmentfault.com/a/1190000008866524">
      https://segmentfault.com/a/1190000008866524</a>
    </p>

    <p>
      6、递归
      <a target="_blank" href="https://segmentfault.com/a/1190000009857470">
      https://segmentfault.com/a/1190000009857470</a>
    </p>

    <p>
      7、堆栈
      <a target="_blank" href="https://juejin.im/post/5b6c4976f265da0f4f1669ac">
      https://juejin.im/post/5b6c4976f265da0f4f1669ac</a>
    </p>

    <p>
      8、队列
      <a target="_blank" href="https://juejin.im/post/5819c153da2f60005ddc1e8a">
      https://juejin.im/post/5819c153da2f60005ddc1e8a</a>
    </p>
  </div>
</template>
<script>

var arr = [8,12,123,45,66,78,21,1,334,2,5,56,32,4]
// console.log(this.shellSort(arr))
// console.log(this.selectionSort(arr))

// 1、快速排序
// 时间复杂度 O(nlogn)
function quick_sort(arr) {
    if(arr.length <= 1) {
        return arr
    }

    let temp = arr[0]
    let left = []
    let right = []
    for(let i=1; i< arr.length; i++) {
        if(temp>arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quick_sort(left).concat([temp], quick_sort(right))
}
console.time('sort')
console.log(quick_sort(arr))
console.timeEnd('sort')

// 快速排序优化版
// 时间复杂度O(1)
function quick_sort1(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0]

    let i = 1
    let j = arr.length-1
    while(i<j){
        let pivot = arr[0]
        while(arr[j]>=pivot && i<j){
            j --
        }
        while(arr[i]<=pivot && i<j){
            i ++
        }
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let left = arr.slice(1,i+1)
    let right = arr.slice(j+1)
    return [...quick_sort1(left), pivot, ...quick_sort1(right)]
}
// console.time('sort')
// console.log(quick_sort1(arr));
// console.timeEnd('sort')

// 2、希尔排序
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap = gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}

// 3、选择排序
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     // 寻找最小的数
          minIndex = j;                 // 将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

//4、冒泡排序
function bubbleSort(arr) {
  var temp,swap;
  for(var i=0;i<arr.length-1;i++){
      swap=false;
      for(var j=0;j<arr.length-1-i;j++){
          if(arr[j]>arr[j+1]){
              var temp=arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp;
              
              swap=true;
          }
      }
      if(!swap){
          break;
      }
  }
  return arr;
}

// 5、归并排序
var merge = function(leftArr, rightArr){  
  var result = [];  
  while (leftArr.length > 0 && rightArr.length > 0){  
    if (leftArr[0] < rightArr[0])  
      result.push(leftArr.shift()); //把最小的最先取出，放到结果集中   
    else   
      result.push(rightArr.shift());  
    }   
    return result.concat(leftArr).concat(rightArr);  //剩下的就是合并，这样就排好序了  
}

var mergeSort = function(array){  
  if (array.length == 1) return array;  
  var middle = Math.floor(array.length / 2);       //求出中点  
  var left = array.slice(0, middle);               //分割数组  
  var right = array.slice(middle);  
  return merge(mergeSort(left), mergeSort(right)); //6、递归合并与排序  
} 
// console.log(mergeSort(arr))


export default {
  name: 'quickSort',
  methods: {
  },
  mounted() {
    // 练习
    // var myarr = [4,5,2,1,4,7,8,0,10,22]
    // function quick(myarr){
    //   if(myarr.length <= 1) {
    //     return arr
    //   }

    //   let temp = myarr[0]
    //   let left = []
    //   let right = []
    //   for(let i=0; i<myarr.length; i++) {
    //     if(myarr[0] > temp) {
    //       left.push(myarr[0])
    //     } else {
    //       right.push(myarr[0])
    //     }
    //   }
    //   return quick(left).concat([temp], quick(right))
    // }
    // console.log(quick(myarr))
  }
}

</script>