<template>
    <div>
        <header>
            <a href="#home">首页</a>
            <a href="#center">个人中心页</a>
            <a href="#help">帮助页</a>
        </header>
        <section id="content"></section>
    </div>
</template>

<script>
    export default {
        mounted() {
            // window.addEventListener('hashchange', (e) => {
            //     let content = document.getElementById('content');
            //     console.log(location)
            //     content.innerText = location.hash;
            // })
        }
    }
</script>

<style lang="less" scoped>

</style>