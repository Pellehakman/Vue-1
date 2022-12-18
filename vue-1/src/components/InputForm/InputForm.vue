<script lang="ts" src="./InputForm.ts"></script>

<template>
    <h1>{{message}}</h1>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="text"/>
        <input type="password" v-model="password"/>
        <input type="submit"/>
    </form>
    
</template>