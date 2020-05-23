<template>
    <div>
      <p>1、ajax封装</p>
      <p>2、XMLhttprequest封装promise.then（promise化ajax）</p>
    </div>
</template>

<script>
    export default {
      methods: {
        ajax: (method, url, data, success) => {
          var xhr = null;
          try {
            xhr = new XMLHttpRequest();
          } catch (e) {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
          }
          
          if (method == 'get' && data) {
            url += '?' + data;
          }
          
          xhr.open(method,url,true);
          if (method == 'get') {
            xhr.send();
          } else {
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(data);
          }
          
          xhr.onreadystatechange = function() {
            
            if ( xhr.readyState == 4 ) {
              if ( xhr.status == 200 ) { 
                success && success(xhr.responseText);
              } else {
                alert('出错了,Err：' + xhr.status);
              }
            }
            
          }
        },

        // 2、XMLhttprequest封装promise.then（promise化ajax）
        promisefy: (options) => {
          let method = options.method,
              url = options.url,
              success = options.success,
              async = options.async,
              params = options.params,
              data = options.data,
              headers = options.headers;

          return new Promise((resolve, reject) => {
            var client;
            try{
              client = new XMLHttpRequest()
            } catch {
              client = new ActiveXObject('Microsoft.XMLHTTP')
            }

            /**
              readyState:
                0: 请求未初始化
                1: 服务器连接已建立
                2: 请求已接收
                3: 请求处理中
                4: 请求已完成，且响应已就绪
              status: HTTP 状态码
            **/

            if(params) {
              let queryStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
              url = options.url + '?' + queryStr
            }
            client.open(method, url, async)

            if(headers) {
              Object.keys(headers).forEach(key => {
                client.setRequestHeader(key, headers[key])
              })
            }

            if(method == 'GET') {
              client.send()
            } else {
              client.send(data)
            }
           
            client.onreadyStatechange = function() {
              if(client.readyState == 4) {
                if(client.status == 200) {
                  success && success(client.responseText)
                  resolve(client.responseText)
                } else {
                  reject(new Error('err messgae:', client.statusText))
                } 
              }
            }

          })
        }
      },
      mounted() {

        // this.ajax('get', 'https://server.locusy.top/client_demo_api/blog/list', '', function(res) {
        //   // console.log('res:::', res)
        // })

        // 调用示例
        this.promisefy({
          method: 'GET',
          url: 'https://server.locusy.top/client_demo_api/blog/list',
          success: function(res) {
            console.log('success er', res.code);
          },
          async: true,
          params: {
            pageindex: 1,
            pagesize: 5
          },
          data: {},
          headers: {
            'Content-Type': 'application/json'
            // 'content-type', 'application/x-www-form-urlencoded'
          }
        }).then(
          res => {
            console.log('res', res)
          },
          err => {
            console.error(err)
          }
        )

      }
    }
</script>

<style lang="less" scoped>

</style>