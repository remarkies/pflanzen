<template>
  <div>
    <Header :description="description">
        Vergleich von <span class="color-primary">Ökosystemen</span>
    </Header>

    <ComparisonSalad />

    <ComparisonSound />
  </div>
</template>

<script>
// import Comparison from "@/components/Comparison";
import Header from "@/components/Header";
import ComparisonSalad from "@/components/ComparisonSalad";
import ComparisonSound from "@/components/ComparisonSound";

export default {
  name: "Comparison",
  components: {
    ComparisonSalad,
    ComparisonSound,
    Header
  },
  data () {
    return {
      description: 'Lorem Ipsum'
    }
  }
}
</script>

<style scoped>

</style>