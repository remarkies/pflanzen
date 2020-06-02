<template>
  <Comparison
    :comparison-data="comparison"
    :image-path="imagePath"
  />
</template>

<script>
import Comparison from '@/components/Comparison';

export default {
  name: 'ComparisonPotato',
  components: {
    Comparison,
  },
  data() {
    return {
      imagePath: 'potato',
      comparison: [
        {
          title: 'Woche 1',
          week: 19,
          items: [
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W1-Andre-IMG_0476.jpeg',
              place: 'Quinten',
              person: 'André',
            },
            {
              image: 'Kartoffel-Luka-1.jpg',
              place: 'Adliswil',
              person: 'Luka',
            },
          ],
        },
        {
          title: 'Woche 3',
          week: 20,
          items: [
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W2-Andre-IMG_6482.jpeg',
              place: 'Quinten',
              person: 'André',
            },
            {
              image: 'Kartoffel-Luka-2.jpg',
              place: 'Adliswil',
              person: 'Luka',
            },
          ],
        },
        {
          title: 'Woche 5',
          week: 21,
          items: [
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W3-Andre-2-IMG_6035.jpeg',
              place: 'Quinten',
              person: 'André',
            },
            {
              image: 'Kartoffel-Luka-3.jpg',
              place: 'Adliswil',
              person: 'Luka',
            },
          ],
        },
      ],
    };
  },
};
</script>
