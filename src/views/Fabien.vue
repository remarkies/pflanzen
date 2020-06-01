<template>
  <div>
    <Header name="Fabien" :description="description" />
    <section class="container-xl">
      <Article v-for="article in articles" :key="article.title" :article="article" collapsible />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Article from "@/components/Article";
import DataSet from "@/modules/dataset-generator";

export default {
  name: "Fabien",
  components: {
    Header,
    Article
  },
  data() {
    return {
      description: "",
      articles: [],
    };
  },
  mounted() {
    this.initArticles();
  },
  methods: {
    initArticles() {
      const colorThemes = DataSet.createArticle(
        "Farbpaletten",
        "Hallo",
        [
          DataSet.createImageSet("", false, [
            DataSet.createRow([
              DataSet.createImage("/img/fabien/insects/P1010296.jpg", 4, ["#FF5733", "#33F0FF", "#7A33FF", "#FFE033"]),
              DataSet.createImage("/img/fabien/insects/P1010296.jpg", 4, ["#FF5733", "#33F0FF", "#7A33FF", "#FFE033"]),
              DataSet.createImage("/img/fabien/insects/P1010296.jpg", 4, ["#FF5733", "#33F0FF", "#7A33FF", "#FFE033"])
            ])
          ]),
        ]
      );
      this.articles.push(colorThemes);

      const fruits = DataSet.createArticle(
        "Früchte und Beeren",
        "Wir verfügen in unserem über verschiedene Fruchtbäume und Beerensträucher, die uns mit frischen Produkten für Confiture, Desserts, Znüni/Zvieri etc. versorgen.<br><br>Um die Verwandlung von der Blüte zur Frucht festzuhalten, aber auch das Entwicklungsstadium der verschiedenen Pflazen zu vergleichen, habe ich die entsprechenden Pflanzen in den letzten Wochen fotografisch dokumentiert.",
        [
          DataSet.createImageSet("Unser <strong>Aprikosenbaum</strong> hat aufgrund des sehr frühen Frühlingeinbruchs bereits Ende März/Anfangs April geblüht. Ein späterer Kälteeinbruch hat ihm arg zugesetzt, aus welchem Grund dieses Jahr keine einzige Aprikose heranwächst.", false, [
            DataSet.createRow([
              DataSet.createImage("/img/fabien/fruits/P1020248.jpg", 12),
            ])
          ]),
          DataSet.createImageSet("Der <strong>Zwetschgenbaum</strong> hat ein fruchtreiches Jahr hinter sich – jedes zweite jahr ist er besonders mit Früchten beladen. Dieses Jahr wachsen erwartungsgemäss weniger Zwetschgen heran. Ihre Entwicklung in den letzten Wochen ist auch eher subtil. Die charakteristische Form ist im Vergleich zu Dokumentationsbeginn ausgeprägter (siehe Rundungen auf Bild 2 + 3 im Kontrast zu Form in Bild 1) und das wachstende Gewicht der Frucht lässt sie vertikaler hängen.", false, [
            DataSet.createRow([
              DataSet.createImage("/img/fabien/fruits/P1020247.jpg", 12),
              DataSet.createImage("/img/fabien/fruits/P1020287.jpg", 4),
              DataSet.createImage("/img/fabien/fruits/P1020271.jpg", 4),
              DataSet.createImage("/img/fabien/fruits/P1020272.jpg", 4),
            ])
          ]),
          DataSet.createImageSet("<strong>Brombeeren</strong> erreichen bei uns ihre Reife zwischen Juli und August. In einem entsprechend frühen Entwicklungsstadium befinden sie sich aktuell. Immerhin ist die Evolution von der Blühte zur späteren Frucht bereits sichtbar.", false, [
            DataSet.createRow([
              DataSet.createImage("/img/fabien/fruits/P1020257.jpg", 4),
              DataSet.createImage("/img/fabien/fruits/P1020303.jpg", 4),
              DataSet.createImage("/img/fabien/fruits/P1020254.jpg", 4),
            ])
          ]),
          DataSet.createImageSet("Die <strong>Himbeersträucher</strong> haben in den letzten Wochen eine unglaubliche Verwandlung durchlaufen. Von der verwelkten Blühte bis hin zu ersten rosafarbenen Früchten ist viel passiert.", false, [
            DataSet.createRow([
              DataSet.createImage("/img/fabien/fruits/P1020258.jpg", 4),
              DataSet.createImage("/img/fabien/fruits/P1020305.jpg", 4),
              DataSet.createImage("/img/fabien/fruits/P1020259.jpg", 4),
            ])
          ]),
          DataSet.createImageSet("Bei Dokumentationsbeginn habe ich die <strong>Johannisbeeren</strong> – im Vergleich zu den anderen Früchten – bereits in einem fortgeschrittenen Stadium vorgefunden. Die Farbwandlung aus den letzten Wochen ist aber sehr gut sichtbar.", false, [
            DataSet.createRow([
              DataSet.createImage("/img/fabien/fruits/P1020316.jpg", 4),
              DataSet.createImage("/img/fabien/fruits/P1020314.jpg", 4),
              DataSet.createImage("/img/fabien/fruits/P1020312.jpg", 4),
            ])
          ])
        ]
      );
      this.articles.push(fruits);

      const insects = DataSet.createArticle(
        "Makrofotografie",
        "Fotografie stellt in meinem Leben ein stiefmütterlich behandeltes Hobby dar. Ich finde verschiedenste Aspekte dieser Tätigkeit, von der Funktionsweise einer Kamera, über Bildkomposition bis hin zur Bildbearbeitung, sehr spannend und verbringe nichtdestotrotz nur sehr selten Zeit mit einer Fotokamera in den Händen.<br><br>Ein Bereich der Fotografie den ich bis anhin noch gar nie unter die Lupe genommen habe ist die Makrofotografie. Wie auch ohne Makroobjektiv oder externen Blitz! Genau dies habe ich mir zur Challenge gemacht: Was ist in diesem sehr spezifischen Bereich der Fotografie ohne spezifisches Equipment möglich?<br><br> <strong>Folgende Learnings habe ich bei meiner Arbeit gemacht:</strong> <ul><li>Vergrösserungsfaktor des Objektivs von 1:2 verunmöglicht das Fotografieren von sehr kleinen Insekten und Spinnen (< 1cm) im Gras</li><li>Kurzdistanziger Blitz würde dank kürzerer Belichtungszeit helfen, das Subjekt vom Hintergrund abzuheben (dünklerer Hintergrund)</li><li>Blitz verunmöglicht aufgrund der kurzen Belichtungszeit das scharfe Abbilden von fliegenden Insekten</li><li>Mindestfokusdistanz von 0.3m und Vergrösserungsfaktor von 1:2 reichen nicht, um fürs blosse Auge nicht sichtbare Details zu enthüllen. Einzig das Verwenden von sehr schnellen Verschlusszeiten, respektive das resultierende Einfrieren von Bewegung verhalf fürs menschliche Auge Verborgenes festzuhalten.</li><li>Um genügend Tiefenschärfe zu garantieren sind Blende f5.8 oder mehr ein Muss. Dadurch muss allerdings leider die ISO-Sensibilität erhöht werden, um genügend kurze Verschlusszeiten zu erreichen</li></ul><br>Als <strong>effektivstes Setup</strong> identifiziert habe ich: Maximaler Zoom, manueller Zoom auf die kleinste Fokusdistanz eingestellt, Blendenvorwahl, um Tiefenschärfe zu kontrollieren, ISO-Wert abhängig der resultierenden Belichtungszeit anpassen, Fokussieren durch Bewegen der ganzen Kamera.",
        [
          DataSet.createImageSet("", false, [
            DataSet.createRow([
              DataSet.createImage("/img/fabien/insects/P1010296.jpg", 4),
              DataSet.createImage("/img/fabien/insects/P1010809.jpg", 8),
              DataSet.createImage("/img/fabien/insects/P1020100.jpg", 3),
              DataSet.createImage("/img/fabien/insects/P1020189.jpg", 3),
              DataSet.createImage("/img/fabien/insects/P1010921.jpg", 6),
              DataSet.createImage("/img/fabien/insects/P1020045.jpg", 5),
              DataSet.createImage("/img/fabien/insects/P1020020.jpg", 7),
              DataSet.createImage("/img/fabien/insects/P1020244.jpg", 8),
              DataSet.createImage("/img/fabien/insects/P1010747.jpg", 4)
            ])
          ])
        ]
      );
      this.articles.push(insects);
    }
  }
};
</script>

<style scoped>
.container {
  background: red;
}
</style>
