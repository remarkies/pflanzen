<template>
    <div class="home">
        <div class="comparison"><router-link :to="{name: 'comparison'}">Comparison</router-link></div>
        <div class="andre"><router-link :to="{name: 'andre'}">André</router-link></div>
        <div class="luka"><router-link :to="{name: 'luka'}">Luka</router-link></div>
        <div class="fabien"><router-link :to="{name: 'fabien'}">Fabien</router-link></div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>