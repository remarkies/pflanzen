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
        description: 'Ein weiterer Vergleich bestand darin, Kartoffeln zu vergraben und nach einigen Wochen beim Herausnehmen ihre Entwicklung festzuhalten.<br><br>Vor dem Verbudeln sahen alle Knollen noch sehr ähnlich aus, wobei zu erwähnen ist, dass die Kartoffel von Luka bereits über kleinere Auswüchse verfügte. Zwei Wochen später führt die Kartoffel von Fabien das Rennen an, hat es doch bereits relativ lange Keime produziert. Am Ende der für den Vergleich geplanten fünf Wochen zeigt sich das Bild allerdings ganz anders. Die Kartoffeln von André und Luka haben sich prächtig entwickelt und an der Erdoberfläche blättrige Stiele hervorgebracht. Währenddessen hat die Knolle von Fabien seit der Woche 3 nur noch kleinere Veränderungen durchlebt und auf einer zweiten Seite Keime produziert. Wurde sie möglicherweise nach dem zwischenzeitigen Ausgraben mit der falschen Seite nach oben zurückgelegt?',
      },
      comparisonSound: {
        title: 'Klänge der Natur 📻',
        description: 'Damit die Aufnahmen analysiert werden konnten, wurde bei jeder Aufzeichnung eine Notiz gemacht, was für Geräusche zu hören sind und zusätzlich in welcher Lautstärke. Danach wurde innerhalb eines Ökosystems nach Regelmässigkeiten gesucht, damit später Standorte miteiander verglichen werden können und zusätzlich unregelmässige Geräusche weniger Wert geben zu können. In der nachfolgenden Analyse ist beim Nennen eines Standortes das Ökosystem des jeweiligen Ortes gemeint. <br/><br/>Generell lässt sich sagen, dass an allen Standorten das Gezwitscher der Vögel um 09:00 Uhr, sowie um 16:00 Uhr zu hören ist. Der Verkehr ist am lautesten um 16:00 Uhr. Um 23:00 Uhr sind an allen Standorten Grillen zu hören, am lautesten in Hünibach. Hünibach weist als einzige Lage die Besonderheit auf, dass um 23:00 Uhr kein Verkehr zu hören ist, dafür kräht Morgens um 09:00 Uhr der Hahn. In Schmitten und Adliswil ist es um 16:00 Uhr üblich Stimmen zu hören, dazu um 23:00 Uhr leise Verkehrsgeräusche aus der Ferne, sowie von Zeit zu Zeit ein penetrantes Motorrad. In Adliswil fährt der Bus bis spät in die Nacht.',
      },
      comparisonColorTheme: {
        title: 'Farbpaletten 🌈',
        description: 'Seit Beginn an kam regelmässig das Thema des Erstellens einer Farbpalette auf. Jeder von uns bestimmte zu drei Bildern mit eigenen Kriterien eine Farbpalette. Wir wählten die Motive Close-Up, Aussicht & Wiese.<br/>\n' +
                'Beim Betrachten der Resultate fiel uns jedoch auf, dass dies sehr subjektiv ist und deshalb schlecht Vergleiche gezogen werden können. Das Interessante ist dagegen, dass beim Thema Aussicht sehr ähnliche Farbpaletten entstanden sind, obwohl die Bilderauswahl, sowie die Auswahl der Kriterien eigenständig geschehen ist.'
      }
    };
  },
};
</script>

<style scoped>

</style>
