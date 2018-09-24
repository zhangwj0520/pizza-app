# 笔记

### 路由跳转的方式
 1. 跳转到上一次浏览的页面;
    this.$router.go(-1)

2. 指定跳转地址
    this.$router.replace('/menu')

3. 指定跳转路由的名字下
    this.$router.replace({name:'menuLink'})

4. 通过push进行跳转
    this.$router.push('/menu')

### 全局守卫 和 路由独享守卫



####
1.  savedPosition浏览器点击前进后退
2. firebase
3. axios   es6中的fetch
4. headers:{
                    "Content-type":"application/json"