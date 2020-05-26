<template>
  <div id="app">
    <Navigation />
    <main id="content">
      <router-view />
    </main>
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
@import 'styles/main.scss';

body{
  color: var(--color-text);
}
</style>
