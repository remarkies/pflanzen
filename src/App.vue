<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
@import 'styles/main.scss';

body{
  color: var(--color-text);
}
</style>
