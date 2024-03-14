<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default{
    name: 'App'
  }
</script>
<style>
@import "~assets/css/global.css";

html,
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
html {
  height: 100vh;
}
body {
  height: 100%;
  min-width: 1200px;
}
#app {
  height: 100%;
}
</style>
