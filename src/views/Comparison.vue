<template>
  <div>
    <Header :description="description">
        Vergleich von <span class="color-primary">Ökosystemen</span>
    </Header>
    <ComparisonSalad />
  </div>
</template>

<script>
// import Comparison from "@/components/Comparison";
import Header from "@/components/Header";
import ComparisonSalad from "@/components/ComparisonSalad";

export default {
  name: "Comparison",
  data () {
    return {
      description: 'Lorem Ipsum'
    }
  },
  components: {
    ComparisonSalad,
    Header
  }
}
</script>

<style scoped>

</style>