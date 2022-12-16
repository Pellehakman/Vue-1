<script lang="ts" src="./LoginForm.ts">
    
</script>



<template>
    <header>this is login form</header>
    <form @submit.prevent="handleSubmit">
        <LoginInput :text="text"/>
        <!-- <input type="password" /> -->
        <input type="submit"/>
    </form>
</template>