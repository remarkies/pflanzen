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
              image: 'Farbpalette-Fabien-1.jpg',
              person: 'Fabien',
              rule: 'Dieses Bild verfügt über verschiedene dominante Farben. Ich habe bei dieser Farbpalette deshalb die fünf Farben ausgewählt, die mir am ehesten ins Auge gestochen sind.',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Luka-2.jpg',
              person: 'Luka',
              rule: 'Der Farbverlauf der Blüten meiner Hortesie beginnt Innen mit einem dunkleren Grün und bewegt sich nach Aussen zu einem Rosa. Ziel war hier den Farbverlauf der Blüte mit 5 Farben darzustellen.',
              colors: ["#596400", "#B6A000", "#F2D544", "#F28972", "#F26B6B"]
            },
          ]
        },
        {
          title: 'Aussicht',
          items: [
            {
              image: 'Farbpalette-Fabien-2.jpg',
              person: 'Fabien',
              rule: 'Die Farbwelt des oberen Drittels des Bilds unterscheidet sich markant vom Rest. Also habe ich versucht, die Blautöne des Himmels in Einklang mit den Grüntönen der Pflanzen zu bringen.',
              colors: ["#5483c7", "#8fc5f3", "#52665b", "#5f802f", "#9dae3c"]
            },
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Luka-1.jpg',
              person: 'Luka',
              rule: 'Hier bedarf es einer Eingrenzung, weil zu viele stark unterschiedliche Farben vorhanden sind. Die essentiellen Farben zum Bild liefert der Himmel und die verschiedenen Grüntöne der Pflanzen. Auf das Rot/Orange der Buschblätter, sowie das Rosa der Blüten musste verzichtet werden, weil sonst die Blautöne des Himmels oder die Grüntöne der Pflanzen zu kurz kommen würden. Ich habe mich für die Mehrheit der Blautöne entschieden, weil der Himmel hellere Farbtöne hergibt und somit als neutraler Hintergrund besser funktionieren würde.',
              colors: ["#E2F2FA", "#C5E9F7", "#578399", "#7FA600", "#214C00"]
            },
          ]
        },
        {
          title: 'Wiese',
          items: [
            {
              image: 'Farbpalette-Fabien-3.jpg',
              person: 'Fabien',
              rule: 'Bei dieser Palette habe ich versucht, die Wärme, welche das Bild ausstrahlt, mit der Farbwahl auszudrücken.',
              colors: ["#a0c015", "#edf0ab", "#ffc903", "#e47dc4", "#c7378e"]
            },
            {
              image: 'Farbpalette-Fabien.jpg',
              person: 'Fabien',
              rule: 'test',
              colors: ["#e75232", "#fdd42c", "#fafafa", "#6b9412", "#242b3d"]
            },
            {
              image: 'Farbpalette-Luka-3.jpg',
              person: 'Luka',
              rule: 'Das Ziel hier war die markanten Farben festzuhalten. Dazu gehörten die zwei Blütenfarben Gelb und Rosa und die drei grünen Abstufungen der Wiese.',
              colors: ["#BC6E95", "#FFD500", "#78B400", "#316E00", "#053900"]
            },
          ]
        }
      ]
    };
  }
};
</script>