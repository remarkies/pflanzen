<template>
  <div>
    <Header :description="headerDescription">
      Vergleich von <span class="color-primary">Ökosystemen</span>
    </Header>

    <div class="container-lg">

      <Article :article="comparisonSound">
        <template v-slot:content>
          <ComparisonSound />
        </template>
      </Article>


      <Article :article="comparisonSalad">
        <template v-slot:content>
          <ComparisonSalad />
        </template>
      </Article>

      <Article :article="comparisonPotato">
        <template v-slot:content>
          <ComparisonPotato />
        </template>
      </Article>

      <Article :article="comparisonColorTheme">
        <template v-slot:content>
          <ComparisonColorTheme />
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
import ComparisonColorTheme from '@/components/ComparisonColorTheme';

export default {
  name: 'Comparison',
  components: {
    Header,
    Article,
    ComparisonSalad,
    ComparisonSound,
    ComparisonPotato,
    ComparisonColorTheme
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
      comparisonColorTheme: {
        title: 'Farbpaletten',
        description: 'Hallo'
      }
    };
  },
};
</script>

<style scoped>

</style>
