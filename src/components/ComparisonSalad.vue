<template>
  <Comparison
    :comparison-data="comparison"
    :image-path="imagePath"
  />
</template>

<script>
import Comparison from '@/components/Comparison';

export default {
  name: 'ComparisonSalad',
  components: {
    Comparison,
  },
  data() {
    return {
      imagePath: 'salad',
      comparison: [
        {
          title: 'Woche 1',
          week: 19,
          items: [
            {
              image: 'Salat-Fabien-1.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Hünibach',
              person: 'André',
            },
            {
              image: 'Kopfsalat-Luka-1.jpg',
              place: 'Adliswil',
              person: 'Luka',
            },
          ],
        },
        {
          title: 'Woche 2',
          week: 20,
          items: [
            {
              image: 'Salat-Fabien-2.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W2-Andre-20200521-DT4A9198-Web.jpg',
              place: 'Hünibach',
              person: 'André',
            },
            {
              image: 'Kopfsalat-Luka-2.jpg',
              place: 'Adliswil',
              person: 'Luka',
            },
          ],
        },
        {
          title: 'Woche 3',
          week: 21,
          items: [
            {
              image: 'Salat-Fabien-3.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W3-Andre-20200528-DT4A9305-Web.jpg',
              place: 'Hünibach',
              person: 'André',
            },
            {
              image: 'Kopfsalat-Luka-3.jpg',
              place: 'Adliswil',
              person: 'Luka',
            },
          ],
        },
        {
          title: 'Woche 4',
          week: 22,
          items: [
            {
              image: 'Salat-Fabien-4.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W4-Andre-20200603-DT4A9333-Web.jpg',
              place: 'Hünibach',
              person: 'André',
            },
            {
              image: 'Kopfsalat-Luka-4.jpg',
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
