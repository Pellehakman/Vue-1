<script lang="ts" src="./Calender.ts"></script>

<template>
    <h1>Calender</h1>
    <div v-for="f in data" :key="f.number">{{ f.short }}</div> 
    
</template>