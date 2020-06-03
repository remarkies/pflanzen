<template>
  <header>
    <div class="container-lg">
      <h1><slot>Projekte von <span class="color-primary">{{ name }}</span></slot></h1>
      <p class="description" v-html="description" />
    </div>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: '',
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

header{
  padding-top: 160px;
  padding-bottom: 90px;
  background: var(--color-gray-lighter);

  @include media-breakpoint-down(sm){
    padding-top: 110px;
    padding-bottom: 50px;
  }
}

.description{
  margin-top: 15px;
}
</style>
