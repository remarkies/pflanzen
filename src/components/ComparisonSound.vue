<template>
  <div class="container-lg">
    <Comparison :comparison-data="comparison" video is-two-dimensional />
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
          week: 19,
          timeEntries: [
            {
              title: '9:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            },
            {
              title: '16:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            },
            {
              title: '23:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            }
          ]
        },
        {
          title: 'Woche 2',
          week: 19,
          timeEntries: [
            {
              title: '9:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            },
            {
              title: '16:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            },
            {
              title: '23:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            }
          ]
        },
        {
          title: 'Woche 3',
          week: 19,
          timeEntries: [
            {
              title: '9:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            },
            {
              title: '16:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            },
            {
              title: '23:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            }
          ]
        },
        {
          title: 'Woche 4',
          week: 19,
          timeEntries: [
            {
              title: '9:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            },
            {
              title: '16:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            },
            {
              title: '23:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André'
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Adliswil',
                  person: 'Luka'
                },
              ]
            }
          ]
        },
      ]
    }
  }
}
</script>
