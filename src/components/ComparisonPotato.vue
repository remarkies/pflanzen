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
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Hünibach',
              person: 'André',
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
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
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Hünibach',
              person: 'André',
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
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
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Hünibach',
              person: 'André',
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
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
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Schmitten',
              person: 'Fabien',
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
              place: 'Hünibach',
              person: 'André',
            },
            {
              image: 'W1-Andre-20200507-DT4A9091-Web-2.jpg',
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
