<template>
  <Comparison
    :comparison-data="comparison"
    :image-path="imagePath"
  />
</template>

<script>
import Comparison from '@/components/Comparison';

export default {
  name: "ComparisonColorTheme",
  components: {
    Comparison,
  },
  data() {
    return {
      imagePath: 'colorTheme',
      comparison: [
        {
          title: 'Close-Up',
          items: [
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
          ]
        },
        {
          title: 'Aussicht',
          items: [
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
          ]
        },
        {
          title: 'Wiese',
          items: [
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
          ]
        }
      ]
    };
  }
};
</script>