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
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

body{
  color: var(--color-text);

  @include media-breakpoint-down(sm){
    font-size: 0.95rem;
  }
}
</style>
