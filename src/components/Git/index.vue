<template>
    <div>
        <p>1、git revert 和 git reset 的区别</p>
        <p>2、git rebase（变基）</p>
        <p>3、同步远程分支信息</p>
        <p>4、删除远程分支</p>
    </div>
</template>

<script>
/*
    git文章收集：
    http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html
    https://www.liaoxuefeng.com/wiki/896043488029600/1216289527823648


    1、git revert 和 git reset 的区别
       在还没有push的情况下：
        git reset --hard HEAD^ 撤销上一次commit，会在git提交记录中消失
       已经push上去后：
        git revert HEAD^ 添加新的commit，这次新的commit是上一次commit的反转，相当于抵消上一次commit，
        不会在历史中消失  然后再push

    2、git rebase（变基）
      给commit序列重新设置基础点
      例如:
        在master分支：git merge branch1
        如果用rebase则这样写：
            git checkout branch1  
            git rebase master
            再切回master：
            git checkout master
            git merge branch1

    3、同步远程分支信息
        git fetch --all
        git remote prune origin

    4、删除远程分支
        git push origin --delete 分支名
*/
</script>

<style lang="scss" scoped>

</style>