<template>
  <div>
    <Header name="Fabien" :description="description" />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'Fabien',
  data () {
    return {
      description: ''
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
    .container {
        background: red;
    }
</style>