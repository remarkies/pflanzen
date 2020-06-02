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
      headerDescription: 'In Anbetracht der durch den Corona-Virus entstandenen weltweiten Gesundheitskrise, haben wir – André, Fabien & Luka – uns entschieden, im Rahmen des IDA-Moduls «Pflanzen» ein gemeinsames Gruppenprojekt zu lancieren und der zunehmenden Isolation entgegen zu wirken. Über eine Zeitspanne von sechs Wochen haben wir gemeinsam Projektideen recherchiert, Vergleiche zur Biodiversität in unseren Gärten erarbeitet, eigene kleinere Projekte aus dem Bereich «Biodiversität» umgesetzt, sowie diese Webseite konzipiert und umgesetzt. Viel Spass beim Erforschen der Endprodukte!',
      comparisonSalad: {
        title: 'Anbau von Salat 🥬',
        description: 'In diesem Vergleich hat jeder in seinem Garten einen Kopfsalat gepflanzt und dessen Entwicklung über die Projektdauer beobachtet.<br><br>Bereits die Wahl der Orte, an denen die Salate gesetzt wurden, zeigt spannende Unterschiede auf. Währendem Fabien auf das in seinem Garten bereits bestehende Permakultur-Feld zurückgreifen konnte, hat André seinen Salat in einem normalen Gartenbeet angepflanzt, wobei sich Luka wiederum für einen grossen Blumentopf entschieden hat. Ein weiterer Unterschied besteht darin, dass der Setzling von Fabien bereits von Beginn an (leider) markant grösser ist als die anderen, was den Vergleich leicht erschwert. Kaum verwunderlich ist dieser am Ende der Beobachtungsperiode immer noch der Grösste. Doch auch die zwei anderen Salate haben sich gut entwickelt, wobei der Salat von Luka mittlerweile von anderen Pflanzen verdeckt wurde und vermutlich von einer Umsiedlung und folglich mehr Sonne profitieren würde.',
      },
      comparisonPotato: {
        title: 'Veränderung von Kartoffeln 🥔',
        description: 'Beschreibung Kartoffeln',
      },
      comparisonSound: {
        title: 'Klänge der Natur 📻',
        description: 'Beschreibung Klänge',
      },
      comparisonColorTheme: {
        title: 'Farbpaletten 🌈',
        description: 'Hallo'
      }
    };
  },
};
</script>

<style scoped>

</style>
