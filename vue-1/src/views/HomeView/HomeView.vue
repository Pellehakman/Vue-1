<script src="./HomeView.ts" lang="ts">

</script>

<template>

  
  <main>
    shi
    <NoSite />
   <form @submit.prevent="handleSubmit">
    <input type="text" v-model="textInput" />
    <input type="submit" />
   </form>
  </main>
</template>
