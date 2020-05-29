<template>
  <div>
    <Header :description="headerDescription">
      Vergleich von <span class="color-primary">Ökosystemen</span>
    </Header>

    <div class="container-lg">
      <Article :article="comparisonSalad">
        <template v-slot:content>
          <ComparisonSalad />
        </template>
      </Article>

      <Article :article="comparisonSound">
        <template v-slot:content>
          <ComparisonSound />
        </template>
      </Article>

      <Article :article="comparisonPotato">
        <template v-slot:content>
          <ComparisonPotato />
        </template>
      </Article>
    </div>
  </div>
</template>

<script>
// import Comparison from "@/components/Comparison";
import Header from '@/components/Header';
import Article from '@/components/Article';
import ComparisonSalad from '@/components/ComparisonSalad';
import ComparisonSound from '@/components/ComparisonSound';
import ComparisonPotato from '@/components/ComparisonPotato';

export default {
  name: 'Comparison',
  components: {
    Article,
    ComparisonSalad,
    ComparisonSound,
    ComparisonPotato,
    Header,
  },
  data() {
    return {
      headerDescription: 'Lorem Ipsum',
      comparisonSalad: {
        title: 'Anbau von Salat',
        description: 'Beschreibung Salat',
      },
      comparisonPotato: {
        title: 'Veränderung von Kartoffeln',
        description: 'Beschreibung Kartoffeln',
      },
      comparisonSound: {
        title: 'Klänge der Natur',
        description: 'Beschreibung Klänge',
      },
    };
  },
};
</script>

<style scoped>

</style>
