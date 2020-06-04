<template>
    <div>
        <p>迭代器模式是一种相对简单的模式，简单到很多时候我们都不认为它是一种设计模式。目前的绝大部分语言都内置了迭代器。迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。</p>
    </div>
</template>

<script>
    // jQuery 中的迭代器，迭代器模式无非就是循环访问聚合对象中的各个元素。
    // $.each( [1, 2, 3], function( i, n ){ 
    //   console.log( '当前下标为: '+ i ); 
    //   console.log( '当前值为:' + n );
    // });

    // 内部迭代器
    // var each = function( ary, callback ){
    // for ( var i = 0, l = ary.length; i < l; i++ ) {
    //     callback.call( ary[i], i, ary[ i ] ); // 把下标和元素当作参数传给 callback 函数
    // } 
    // };

    // each( [ 1, 2, 3 ], function( i, n ){
    // console.log ( [ i, n ] );
    // });

    // var compare = function( ary1, ary2 ){ 
    // if ( ary1.length !== ary2.length ){
    //     throw new Error ( 'ary1 和 ary2 不相等' ); 
    // }
    // each( ary1, function( i, n ){ 
    //     if ( n !== ary2[ i ] ){
    //     throw new Error ( 'ary1 和 ary2 不相等' ); 
    //     }
    // });
    // console.log ( 'ary1 和 ary2 相等' ); 
    // };
    // compare( [ 1, 2, 3 ], [ 1, 2, 4 ] ); // throw new Error ( 'ary1和ary2不相等' );




    // 外部迭代器
    var Iterator = function(obj) {
    var current = 0;
    var next = function(){ 
        current += 1;
    };
    var isDone = function(){ 
        return current >= obj.length 
    }
    var getCurrItem = function() {
        return obj[current];
    };
    return {
        next: next,
        isDone: isDone,
        getCurrItem: getCurrItem
    }
    };
    // 再看看如何改写compare函数:
    var compare = function( iterator1, iterator2 ) {
    while(!iterator1.isDone() && !iterator2.isDone()) {
        if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
        throw new Error ('iterator1 和 iterator2 不相等');
        }
        iterator1.next();
        iterator2.next();
    }
    console.log ('iterator1 和 iterator2 相等');
    }
    var iterator1 = Iterator([ 1, 2, 3 ]);
    var iterator2 = Iterator([ 1, 2, 3 ]);
    compare(iterator1, iterator2);   // 输出:iterator1 和 iterator2 相等



    // 迭代类数组对象和字面量对象
    // 迭代器模式不仅可以迭代数组，还可以迭代一些类数组的对象。比如 arguments、 {"0":'a',"1":'b'}等。 通过上面的代码可以观察到，无论是内部迭代器还是外部迭代器，只要被 迭代的聚合对象拥有 length 属性而且可以用下标访问，那它就可以被迭代。
    // 在 JavaScript 中，for in 语句可以用来迭代普通字面量对象的属性。jQuery 中提供了$.each` 函数来封装各种迭代行为:
    // $.each = function( obj, callback ) { 
    //     var value,
    //         i = 0,
    //         length = obj.length,
    //         isArray = isArraylike( obj );
    //     if (isArray) { // 迭代类数组 
    //         for ( ; i < length; i++ ) {
    //         value = callback.call( obj[ i ], i, obj[ i ] );
    //         if ( value === false ) {
    //             break;
    //         } 
    //         }
    //     } else {
    //         for ( i in obj ) { // 迭代object对象
    //         value = callback.call( obj[ i ], i, obj[ i ] ); 
    //         if (value === false) {
    //             break; 
    //         }
    //         } 
    //     }
    //     return obj; 
    // };
    


    // 倒序迭代器
    var reverseEach = function( ary, callback ){
        for ( var l = ary.length - 1; l >= 0; l-- ){
            callback( l, ary[ l ] ); 
        };
        reverseEach( [ 0, 1, 2 ], function( i, n ){ 
            console.log( n ); // 分别输出:2, 1 ,0
        });
    }



    // 中止迭代器：迭代器可以像普通 for 循环中的 break 一样，提供一种跳出循环的方法。
    var each = function( ary, callback ) {
    for ( var i = 0, l = ary.length; i < l; i++ ) {
        if ( callback( i, ary[ i ] ) === false ) {   // callback 的执行结果返回 false，提前终止迭代
        break;
        } 
    }
    }

    each( [ 1, 2, 3, 4, 5 ], function( i, n ){
        if ( n > 3 ){ 
            return false;
        }
        console.log( n );   // n大于3的时候终止循环 // 分别输出:1, 2, 3
    });



    // 迭代器模式的应用举例
    // 未使用迭代器模式时，为了得到一个 upload 对象，这个 getUploadObj 函数里面充斥了 try，catch 以及 if 条件分支。缺点是显而易见的。第一是很难阅读，第二是严重违反开闭原则。 在开发和 调试过程中，我们需要来回切换不同的上传方式，每次改动都相当痛苦。后来我们还增加支持了 一些另外的上传方式，比如，HTML5 上传，这时候唯一的办法是继续往 getUploadObj 函数里增 加条件分支。
    var getUploadObj = function(){ 
        try{
            return new ActiveXObject("TXFTNActiveX.FTNUpload"); 
        } catch(e){
            // IE 上传控件
            if ( supportFlash() ) { // supportFlash 函数未提供
                var str = '<object type="application/x-shockwave-flash"></object>'; 
                return $( str ).appendTo( $('body') );
            } else {
                var str = '<input name="file" type="file"/>'; // 表单上传
                return $( str ).appendTo( $('body') ); 
            }
        } 
    };

    // 使用迭代器模式改造后，我们把每种获取 upload 对象的方法都封装在各自的函数里，然后使用一个迭代器， 迭代获取这些 upload 对象，直到获取到一个可用的为止
    // var getActiveUploadObj = function(){ 
    //     try{
    //         return new ActiveXObject( "TXFTNActiveX.FTNUpload" );  // IE 上传控件
    //     }catch(e){
    //         return false; 
    //     }
    // };

    // var getFlashUploadObj = function(){
    //     if ( supportFlash() ){ // supportFlash 函数未提供
    //         var str = '<object type="application/x-shockwave-flash"></object>';
    //         return $( str ).appendTo( $('body') );
    //     }
    //     return false; 
    // };

    // var getFormUpladObj = function(){
    //     var str = '<input name="file" type="file" class="ui-file"/>';  // 表单上传
    //     return $( str ).appendTo( $('body') );
    // }  

    // var iteratorUploadObj = function() {
    //     for ( var i = 0, fn; fn = arguments[ i++ ]; ) {
    //         var uploadObj = fn();
    //         if ( uploadObj !== false ){
    //         return uploadObj;
    //         } 
    //     }
    // }
    // var uploadObj = iteratorUploadObj( getActiveUploadObj, getFlashUploadObj, getFormUpladObj );


    // 重构代码之后，我们可以看到，获取不同上传对象的方法被隔离在各自的函数里互不干扰， try、catch 和 if 分支不再纠缠在一起，使得我们可以很方便地的维护和扩展代码。比如，后来 我们又给上传项目增加了 Webkit 控件上传和 HTML5 上传，我们要做的仅仅是下面一些工作。
    // var getWebkitUploadObj = function() {
    // // 省略代码
    // }
    // var getHtml5UploadObj = function() {
    // // 省略代码
    // }
    // var uploadObj = iteratorUploadObj( getActiveUploadObj, getFlashUploadObj, getFormUpladObj, getWebkitUploadObj, getHtml5UploadObj);


    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>