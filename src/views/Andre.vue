<template>
  <div>
    <Header
      name="André"
      :description="description"
    />

    <section class="container-xl">
      <Article
        v-for="article in articles"
        :key="article.title"
        :article="article"
        collapsible
      />
    </section>
  </div>
</template>

<script>
import Article from '@/components/Article';
import Header from '@/components/Header';
import DataSet from '@/modules/dataset-generator';

export default {
  name: 'André',
  components: {
    Header,
    Article,
  },
  data() {
    return {
      description: 'Das Ökosystem des eigenen Gartens liegt zwar physisch nahe, und ist mir doch auf eine Art fern. Durch meinen von Technik dominierten Alltag verweile ich meistens nur noch zum Sport oder zur Entspannung in der Natur und nehme mir selten Zeit, Details und die Faszination der gesamten Biodiversität zu entdecken.<br><br>Im IDA-Modul Pflanzen wollte ich mich mit dem Ökosystem meines Gartens in Hünibach und dem Garten des Ferienhauses in Quinten auseinandersetzen und dabei Vergleiche zu meinen Studienkollegen ziehen. Zusätzlich zu diesen Vergleichen habe ich mich mit dem Sähen von Blumen, dem aufziehen von Gemüse und mit Schwalbenschwanz-Schmetterlingen auseinandergesetzt. ',
      articles: [],
      projects: [
        {
          title: 'Blumen sähen',
          description: 'Um das Aufwachsen von Pflanzen zu erleben, habe ich Holzkisten zu Pflanzentöpfen umgebaut und darin 8 verschiedene Blumensorten angesät, die aus meiner Sicht farblich zueinander passen.',
        },
        {
          title: 'Gartenbeet Bau',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu leo, tristique elementum consectetur faucibus vel, fringilla. Sed amet duis etiam condimentum aliquet at sit. Blandit pellentesque tempor facilisis augue pulvinar convallis odio. Tellus blandit tempus cursus tellus porttitor placerat.',
        },
        {
          title: 'Schwalbenschwanz Schmetterlinge',
          subtitle: '',
        },
        {
          title: 'diverses',
        },
      ],
    };
  },
  mounted() {
    this.initArticles();
  },
  methods: {
    initArticles() {
      const articleBlumen = DataSet.createArticle(
        'Blumen sähen 🌱',
        'Um das Aufwachsen von Pflanzen zu erleben, habe ich Holzkisten zu Pflanzentöpfen umgebaut und darin 8 verschiedene Blumensorten angesät, die aus meiner Sicht farblich zueinander passen. Als Experiment und aufgrund der Corona-Situation habe ich Samen verwendet, die man von der Migros als Trophy bei jedem Einkauf erhalten hat.<br>Zusätzlich zu den Blumen in den Holzkisten habe ich Schnittlauch- und Sonnenblumen-Samen in eigenen Töpfen geplanzt.',
        [
          // 19.04.2020
          DataSet.createImageSet('5 Tage', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0293.jpeg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0298.jpeg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0309.jpeg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0330.jpeg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0332.jpeg', 6),
            ]),
          ]),
          // 24.04.2020
          DataSet.createImageSet('1.5 Wochen', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8520.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8521.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8523.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8524.jpeg', 3),
              // DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8527.jpeg', 6),
              // DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8526.jpeg', 6),
            ]),
          ]),
          // 07.05.2020
          DataSet.createImageSet('1.5 Wochen', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-4/20200507-DT4A9028-Web.jpg', 12),
              DataSet.createImage('/img/andre/blumen-kisten/set-4/20200507-DT4A9036-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-4/20200507-DT4A9037-Web.jpg', 6),
            ]),
          ]),
          // 19.05.2020
          DataSet.createImageSet('2 Tage', true, [
            DataSet.createRow([
              // DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9139-Web.jpg', 12),
              // DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9140-Web.jpg', 6),
              // DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9143-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9147-Web.jpg', 12),
            ]),
          ]),
          // 21.05.2020
          DataSet.createImageSet('1 Woche', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9209-Web.jpg', 12),
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9214-Web.jpg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9211-Web.jpg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9218-Web.jpg', 4),
            ]),
          ]),
        ],
      );

      const articleGemueseHuenibach = DataSet.createArticle(
        'Salat-Setzlinge 🥬',
        'In unserem Team haben wir abgemacht, je einen Kopfsalat-Setzling zu pflanzen und sein Aufwachsen fotografisch zu dokumentieren.',
        [
          // 06.05.2020
          DataSet.createImageSet('Die Setzlinge kaufte ich gleich nach der Wiedereröffnung in einer lokalen Gärtnerei. Ich entschied mich, zusätzlich zum grünen Kopfsalat auch noch einen roten Kopfsalat, einen Lattich und einen Eisbergsalat zu kaufen - je ein Stück für Hünibach und eines für Quinten.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/salat-thun/set-1/IMG_9294.jpeg', 8),
              DataSet.createImage('/img/andre/salat-thun/set-1/IMG_9909.jpeg', 4),
            ]),
          ]),
          DataSet.createImageSet('Kaum waren die Setzlinge im Boden, wurden sie von meiner Katze entdeckt. Um die Salate davor zu schützen, dass die Katze sie ausgräbt oder sich darauf legt, habe ich um jeden Salat kleine Holzstäbchen eingesteckt.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/salat-thun/set-2/IMG_6919.jpeg', 4),
              DataSet.createImage('/img/andre/salat-thun/set-2/20200507-DT4A9090-Web.jpg', 8),
            ]),
          ]),
        ],
      );

      this.articles.push(articleBlumen, articleGemueseHuenibach);
    },
  },
};
</script>

<style lang='scss' scoped>

</style>
