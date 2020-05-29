<template>
  <div id="app">
    <Navigation />
    <main id="content">
      <router-view />
    </main>
    <PhotoSwipe />
  </div>
</template>

<script>
import PhotoSwipe from '@/components/PhotoSwipe';
import Navigation from './components/Navigation';


export default {
  name: 'App',
  components: {
    Navigation,
    PhotoSwipe,
  },
};
</script>

<style lang="scss">
@import 'styles/main.scss';

body{
  color: var(--color-text);
}
</style>
