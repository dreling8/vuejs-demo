<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{msg}}</h2>
    <firstcomponent></firstcomponent>
    <router-link to="/view1">Go to view1</router-link>
    <router-link to="/view2">Go to view2</router-link>

   <!-- 路由出口 -->
   <!-- 路由匹配到的组件将渲染在这里 -->
   <router-view></router-view>
  </div>
</template>

<script>
import firstcomponent from './components/firstcomponent.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { firstcomponent }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
