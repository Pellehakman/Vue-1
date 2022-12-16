<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import counterStore from './components/stores/counter'

setup(){
  const { state, getters, inc} = counterStore
  return { state, getters, inc}


}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      
      
  <div class="item">
    <h4> {{ state.count}} x2 = {{ getters.times2}}</h4>
    <button @click="inc(1)">inc</button >
  </div>



      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
