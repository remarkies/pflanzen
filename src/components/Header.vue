<template>
  <header>
    <div class="container-lg">
      <h1>Projekte von <span class="color-primary">{{ name }}</span></h1>
      <p class="description">{{ description }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  padding-top: 160px;
  padding-bottom: 90px;
  background: var(--color-gray-lighter);
}

.description{
  margin-top: 15px;
}
</style>
