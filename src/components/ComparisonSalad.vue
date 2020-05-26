<template>
  <div class="container-lg">
    <Comparison :comparison-data="comparison" :imagePath="imagePath"/>
  </div>
</template>

<script>
import Comparison from "@/components/Comparison";

export default {
  name: 'ComparisonSalad',
  components: {
    Comparison
  },
  data () {
    return {
      imagePath: 'salad',
      comparison: [
        {
          title: 'Woche 1',
          items: [
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Schmitten',
              person: 'Fabien'
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Hünibach',
              person: 'André'
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Adliswil',
              person: 'Luka'
            },
          ]
        },
        {
          title: 'Woche 2',
          items: [
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Schmitten',
              person: 'Fabien'
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Hünibach',
              person: 'André'
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Adliswil',
              person: 'Luka'
            },
          ]
        }
      ]
    }
  }
}
</script>
