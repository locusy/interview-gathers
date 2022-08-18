<template>
    <div>
        <p>1、实现EventEmitter方法：$on、$emit、$once、$off（参照vue源码实现）</p>
        <p>2、Event对象</p>
    </div>
</template>

<script>
    // 1、实现EventEmitter方法：$on、$emit、$once、$off（参照vue源码实现）
    var EventEmiter = function(){
      this._events = {};
    };
    EventEmiter.prototype.on = function (event, cb){
      if (Array.isArray(event)){
        for (let i = 0, l = event.length; i < l; i++){
          this.on(event[i], cb);
        }
      } else {
        (this._events[event] || (this._events[event] = [])).push(cb);
      }
      return this;
    };
    EventEmiter.prototype.once = function (event, cb){
      function on () {
        this.off(event, cb);
        cb.apply(this, arguments);
      }
      on.fn = cb;
      this.on(event, on);
      return this;
    };
    EventEmiter.prototype.off = function (event, cb){
      if (!arguments.length){
        this._events = Object.create(null);
        return this;
      }
      if (Array.isArray(event)){
        for (let i = 0, l = event.length; i < l; i++){
          this.off(event[i],cb);
        }
        return this;
      }
      if (!cb){
        this._events[event] = null;
        return this;
      }
      if (cb){
        let cbs = this._events[event];
        let i = cbs.length;
        while(i--){
          if (cb === cbs[i] || cb === cbs[i].fn){
            cbs.splice(i, 1);
            break;
          }
        }
        return this;
      }
    };
    EventEmiter.prototype.emit = function (event){
      let cbs = this._events[event];
      let args = Array.prototype.slice.call(arguments, 1);
      if (cbs){
        for (let i = 0, l = cbs.length; i < l; i++){
          cbs[i].apply(this,args);
        }
      }
    };


    // 2、Event对象
    class Event {
        constructor() {
            this._events = {};
        }
        /**
         * 监听event事件，触发时调用callback函数
         */
        on(type, callback) {
            let fns = this._events[type] || [];
            if (fns.indexOf(callback) === -1) {
                fns.push(callback);
            }
            this._events[type] = fns
            return this
        }
        /**
         * 触发事件，并把参数传给事件的处理函数
         */
        emit(type, data) {
            let fns = this._events[type];
            if (Array.isArray(fns)) {
                fns.forEach((fn) => {
                    fn(data);
                });
            }
            return this;
        }
        /**
         * 为事件注册单次监听器
         */
        once(type, callback) {
            let wrapFunc = (...args) => {
                callback.apply(this, args);
                this.off(type, callback);
            };
            this.on(type, wrapFunc);
        }
        /**
         * 停止监听event事件
         */
        off(type, callback) {
            let callbacks = this._events[type]
            this._events[type] = callbacks && callbacks.filter(fn => fn !== callback)
            return this    

            // if (!type) {
            //     this._events = {};
            // } else {
            //     let fns = this._events[type];
            //     if (Array.isArray(fns)) {
            //         if (callback) {
            //             let index = fns.indexOf(callback);
            //             if (index !== -1) {
            //                 fns.splice(index, 1);
            //             } else {
            //                 fns.length = 0;
            //             }
            //         }
            //     }
            //     return this;
            // }
        }
    }

    let mye = new Event()
    mye.once('tian', function(data) {
        console.log('tian1', data)
    })
    // mye.on('tian', function(data) {
    //     console.log('tian2', data)
    // })
    // mye.on('tian', function(data) {
    //     console.log('tian3', data)
    // })
    mye.emit('tian', 'daat1')
    mye.emit('tian', 'ddd')

    export default {
    }
</script>

<style lang="less" scoped>
</style>