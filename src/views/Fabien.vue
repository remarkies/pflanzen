<template>
  <div>
    <Header name="Fabien" :description="description" />
    <section class="container-xl">
      <ColorTheme :colorThemes="colorThemes" />
      <Article v-for="article in articles" :key="article.title" :article="article" />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ColorTheme from "@/components/ColorTheme";
import Article from "@/components/Article";
import DataSet from "@/modules/dataset-generator";

export default {
  name: "Fabien",
  components: {
    Header,
    ColorTheme,
    Article
  },
  data() {
    return {
      articles: [],
      description: "",
      colorThemes: [
        {
          src: "fabien/insects/P1010296.jpg",
          colors: ["#FF5733", "#33F0FF", "#7A33FF", "#FFE033"]
        },
        {
          src: "fabien/insects/P1010296.jpg",
          colors: ["#FF5733", "#33F0FF", "#7A33FF", "#FFE033"]
        },
        {
          src: "fabien/insects/P1010296.jpg",
          colors: ["#FF5733", "#33F0FF", "#7A33FF", "#FFE033"]
        }
      ]
    };
  },
  methods: {
    initArticles: function() {
      let insects = DataSet.createArticle(
        "Makrofotografie",
        "Insektenwelt des Gartens",
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
  },
  mounted() {
    this.initArticles();
  }
};
</script>

<style scoped>
.container {
  background: red;
}
</style>