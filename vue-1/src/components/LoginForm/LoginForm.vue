<script lang="ts" src="./LoginForm.ts">
    
</script>



<template>
    <header>this is login form</header>
    <form @submit.prevent="handleSubmit">
  
        <LoginInput :label="emailLabel"/>
   
        <input type="password" />
        <input type="submit"/>
    </form>
</template>