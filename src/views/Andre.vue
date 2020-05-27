<template>
  <div>
    <Header name="André" :description="description" />

    <section class="container-xl">
        <Article v-for="article in articles" :key="article.title" :article="article" />
    </section>
  </div>
</template>

<script>
import Article from '@/components/Article';
import Header from '@/components/Header';
import DataSet from '@/modules/dataset-generator'

export default {
  name: 'André',
  components: {
    Header,
    Article
  },
  data () {
    return {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      articles: [],
      projects: [
        {
          title: 'Blumen sähen',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu leo, tristique elementum consectetur faucibus vel, fringilla. Sed amet duis etiam condimentum aliquet at sit. Blandit pellentesque tempor facilisis augue pulvinar convallis odio. Tellus blandit tempus cursus tellus porttitor placerat.'
        },
        {
          title: 'Gartenbeet Bau',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu leo, tristique elementum consectetur faucibus vel, fringilla. Sed amet duis etiam condimentum aliquet at sit. Blandit pellentesque tempor facilisis augue pulvinar convallis odio. Tellus blandit tempus cursus tellus porttitor placerat.'
        },
        {
          title: 'Schwalbenschwanz Schmetterlinge',
          subtitle: '',
        },
        {
          title: 'diverses'
        }
      ]
    }
  },
  methods: {
    initArticles () {
      let articleBlumen = DataSet.createArticle(
        'Blumen sähen',
        'Lorem Ipsum Description',
        [
          // 19.04.2020
          DataSet.createImageSet('5 Tage', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0293.jpeg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0298.jpeg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0309.jpeg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0330.jpeg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0332.jpeg', 6),
            ])
          ]),
          // 24.04.2020
          DataSet.createImageSet('1.5 Wochen', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8520.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8521.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8523.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8524.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8527.jpeg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8526.jpeg', 6),
            ])
          ]),
          // 07.05.2020
          DataSet.createImageSet('1.5 Wochen', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-4/20200507-DT4A9028-Web.jpg', 12),
              DataSet.createImage('/img/andre/blumen-kisten/set-4/20200507-DT4A9036-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-4/20200507-DT4A9037-Web.jpg', 6),
            ])
          ]),
          // 19.05.2020
          DataSet.createImageSet('2 Tage', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9139-Web.jpg', 12),
              DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9140-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9143-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9147-Web.jpg', 12),
            ])
          ]),
          // 21.05.2020
          DataSet.createImageSet('1 Woche', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9209-Web.jpg', 12),
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9214-Web.jpg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9211-Web.jpg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9218-Web.jpg', 4),
            ])
          ]),
        ]);

      this.articles.push(articleBlumen);
    }
  },
  mounted () {
    this.initArticles()
  }
}
</script>

<style lang='scss' scoped>

</style>