<template>
    <div>
        <p>1、实现EventEmitter方法：$on、$emit、$once、$off（参照vue源码实现）</p>
        <p>2、class Event对象</p>
    </div>
</template>

<script>
    // 1、实现EventEmitter方法：$on、$emit、$once、$off（参照vue源码实现）
    var EventEmiter = function (){
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


    // 2、class Event对象
    class Event {
        constructor() {
            this._cache = {};
        }
        on(type, callback) {
            let fns = this._cache[type] || [];
            if (fns.indexOf(callback) === -1) {
                fns.push(callback);
            }
            return this;
        }
        emit(type, data) {
            let fns = this._cache[type];
            if (Array.isArray(fns)) {
                fns.forEach((fn) => {
                    fn(data);
                });
            }
            return this;
        }
        once(type, callback) {
            let wrapFunc = (...args) => {
                callback.apply(this, args);
                this.off(type, callback);
            };
            this.on(type, wrapFunc);
        }
        off(type, callback) {
            if (!type) {
                this._cache = {};
            } else {
                let fns = this._cache[type];
                if (Array.isArray(fns)) {
                    if (callback) {
                        let index = fns.indexOf(callback);
                        if (index !== -1) {
                            fns.splice(index, 1);
                        } else {
                            fns.length = 0;
                        }
                    }
                }
                return this;
            }
        }
    }

    export default {
        mounted() {
            class myEvent {
                constructor() {
                    this.events = {}
                }
                on(type, cb) {
                    let fns = this.events[type] || []
                    if(fns.indexOf(cb) == -1) {
                        fns.push(cb)
                    }
                    return this
                }
                emit(type, data) {
                    let fns = this.events[type] || []
                    if(Array.isArray(fns)) {
                        fns.forEach(fn => fn(data))
                    }
                    return this
                }
            }

            let mye = new myEvent()
            mye.on('tian', function(data) {
                console.log('tian1', data)
            })
            // mye.on('tian', function(data) {
            //     console.log('tian2', data)
            // })
            // mye.on('tian', function(data) {
            //     console.log('tian3', data)
            // })
            mye.emit('tian', 'daat')

        }
    }
</script>

<style lang="less" scoped>
</style>