<template>
  <div>
    <Header :description="description">
        Vergleich von <span class="color-primary">Ökosystemen</span>
    </Header>

    <ComparisonSalad />

    <ComparisonSound />

    <ComparisonPotato />
  </div>
</template>

<script>
// import Comparison from "@/components/Comparison";
import Header from "@/components/Header";
import ComparisonSalad from "@/components/ComparisonSalad";
import ComparisonSound from "@/components/ComparisonSound";
import ComparisonPotato from "@/components/ComparisonPotato";

export default {
  name: "Comparison",
  components: {
    ComparisonSalad,
    ComparisonSound,
    ComparisonPotato,
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