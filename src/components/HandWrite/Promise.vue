<template>
    <div>

    </div>
</template>

<script>
/*
    http://es6.ruanyifeng.com/#docs/promise
    https://juejin.im/post/5b2f02cd5188252b937548ab

    Promise的缺点:
      首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
      其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
      第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

    new Promise((resolve, reject) => {})
  */
  class Promise{
    constructor(executor) {
      this.status = 'pending'
      this.value = undefined
      this.reason = undefined

      // 数组存入回调函数 相当于发布订阅 实现.then .then .then链式调用
      this.onResolvedCallbacks = []
      this.onRejectedCallbacks = []

      let resolve = value => {
        if (this.status === 'pending') {
          this.status = 'fulfilled'
          this.value = value
        }
      }

      let reject = reason => {
        if (this.status === 'pending') {
          this.status = 'rejected'
          this.reason = reason
        }
      }

      try {
        executor(resolve, reject)
      } catch (err) {
        reject(err)
      }        
    }

    then(onResolved, onRejected) {
      // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
      // onRejected如果不是函数，就忽略onRejected，直接扔出错误
      onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };

      let promise2 = new Promise((reslove, reject) => {
        if (this.status === 'fulfilled') {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        }

        if (this.status === 'rejected') {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        }

        if (this.status === 'pending') {
          this.onResolvedCallbacks.push(() => {
            setTimeout(() => {
              try {
                let x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0);
          })

          this.onRejectedCallbacks.push(() => {
            setTimeout(() => {
              try {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0);
          })
        }
      })

      return promise2
    }
  }

  function resolvePromise(promise2, x, resolve, reject){
    if(x === promise2){
      return reject(new TypeError('Chaining cycle detected for promise'));
    }
    let called;
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
      try {
        let then = x.then;
        if (typeof then === 'function') { 
          then.call(x, y => {
            if(called)return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          }, err => {
            if(called)return;
            called = true;
            reject(err);
          })
        } else {
          resolve(x);
        }
      } catch (e) {
        if(called)return;
        called = true;
        reject(e); 
      }
    } else {
      resolve(x);
    }
  }

  //resolve方法
  Promise.resolve = function(val){
    return new Promise((resolve,reject)=>{
      resolve(val)
    });
  }

  //reject方法
  Promise.reject = function(val){
    return new Promise((resolve,reject)=>{
      reject(val)
    });
  }

  //race方法 
  Promise.race = function(promises){
    return new Promise((resolve,reject)=>{
      for(let i=0;i<promises.length;i++){
        promises[i].then(resolve,reject)
      };
    })
  }

  //all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
  Promise.all = function(promises){
    let arr = [];
    let i = 0;
    function processData(index,data){
      arr[index] = data;
      i++;
      if(i == promises.length){
        resolve(arr);
      };
    };
    return new Promise((resolve,reject)=>{
      for(let i=0;i<promises.length;i++){
        promises[i].then(data=>{
          processData(i,data);
        },reject);
      };
    });
  }


/*
   const PENDING = 1;
    const FULFILLED = 2;
    const REJECTED = 3;

    function MyPromise(executor) {
        let self = this;
        this.resolveQueue = [];
        this.rejectQueue = [];
        this.state = PENDING;
        this.val = undefined;
        function resolve(val) {
            if (self.state === PENDING) {
                setTimeout(() => {
                    self.state = FULFILLED;
                    self.val = val;
                    self.resolveQueue.forEach(cb => cb(val));
                });
            }
        }
        function reject(err) {
            if (self.state === PENDING) {
                setTimeout(() => {
                    self.state = REJECTED;
                    self.val = err;
                    self.rejectQueue.forEach(cb => cb(err));
                });
            }
        }
        try {
            // 回调是异步执行 函数是同步执行
            executor(resolve, reject);
        } catch(err) {
            reject(err);
        }
    }

    MyPromise.prototype.then = function(onResolve, onReject) {
        let self = this;
        // 不传值的话默认是一个返回原值的函数
        onResolve = typeof onResolve === 'function' ? onResolve : (v => v); 
        onReject = typeof onReject === 'function' ? onReject : (e => { throw e });
        if (self.state === FULFILLED) {
            return new MyPromise(function(resolve, reject) {
                setTimeout(() => {
                    try {
                        let x = onResolve(self.val);
                        if (x instanceof MyPromise) {
                            x.then(resolve);
                        } else {
                            resolve(x);
                        }
                    } catch(e) {
                        reject(e);
                    }
                });
            });
        }

        if (self.state === REJECTED) {
            return new MyPromise(function(resolve, reject) {
                setTimeout(() => {
                    try {
                        let x = onReject(self.val);
                        if (x instanceof MyPromise) {
                            x.then(resolve);
                        } else {
                            resolve(x);
                        }
                    } catch(e) {
                        reject(e);
                    }
                });
            });
        }
        
        if (self.state === PENDING) {
            return new MyPromise(function(resolve, reject) {
                self.resolveQueue.push((val) => {
                    try {
                        let x = onResolve(val);
                        if (x instanceof MyPromise) {
                            x.then(resolve);
                        } else {
                            resolve(x);
                        }
                    } catch(e) {
                        reject(e);
                    }
                });
                self.rejectQueue.push((val) => {
                    try {
                        let x = onReject(val);
                        if (x instanceof MyPromise) {
                            x.then(resolve);
                        } else {
                            resolve(x);
                        }
                    } catch(e) {
                        reject(e);
                    }
                });
            });
        }
    }

    MyPromise.prototype.catch = function(onReject) {
        return this.then(null, onReject);
    }

    MyPromise.all = function(promises) {
        return new MyPromise(function(resolve, reject) {
            let cnt = 0;
            let result = [];
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(res => {
                    result[i] = res;
                    if (++cnt === promises.length) resolve(result);
                }, err => {
                    reject(err);
                })
            }
        });
    }

    MyPromise.race = function(promises) {
        return new MyPromise(function(resolve, reject) {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(resolve, reject);
            }
        });
    }

    MyPromise.resolve = function(val) {
        return new MyPromise(function(resolve, reject) {
            resolve(val);
        });
    }

    MyPromise.reject = function(err) {
        return new MyPromise(function(resolve, reject) {
            reject(err);
        })
    }
  */

  export default {
      
  }
</script>

<style lang="less" scoped>

</style>