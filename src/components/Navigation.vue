<template>
    <div class="home">
        <router-link :to="{name: 'comparison'}"><div class="page-comparison">Comparison</div></router-link>
        <router-link :to="{name: 'andre'}"><div class="page-andre">André</div></router-link>
        <router-link :to="{name: 'luka'}"><div class="page-luka">Luka</div></router-link>
        <router-link :to="{name: 'fabien'}"><div class="page-fabien">Fabien</div></router-link>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
</style>