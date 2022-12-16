<template>
  <div class="item">
    <h4> {{ state.count}} x2 = {{ getters.times2}}</h4>
    <button></button @click="inc(1)">
  </div>
</template>

