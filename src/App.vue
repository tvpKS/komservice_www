<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Головна</router-link>
      <router-link to="/cost">Абоненту</router-link>
      <router-link to="/sevice">Тарифи</router-link>
      <router-link to="/pay">Оплата</router-link>
      <router-link to="/about">Контакти</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
