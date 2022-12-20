<script src="./List.ts"></script>

<template>
    <h1>hora</h1>

    <div>
        <p>ordered by {{ order }}</p>
        <ul>
            <li v-for="player in orderedJobs" :key="player.id">
            <h2>{{ player.name }}s favourite weapon is {{ player.weapon }} and he has {{ player.kills }} kills</h2></li>
        </ul>
    </div>
</template>