<template>
  <Comparison
    :comparison-data="comparison"
    video
    is-two-dimensional
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
                  person: 'Fabien',
                },
                {
                  videoReference: 'BjewUXyFGOA',
                  place: 'Hünibach',
                  person: 'André',
                },
                {
                  videoReference: '99h5PPmvdoE',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
            {
              title: '16:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien',
                },
                {
                  videoReference: 'c0a597p4hig',
                  place: 'Hünibach',
                  person: 'André',
                },
                {
                  videoReference: 'xwO4wAgCGq0',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
            {
              title: '23:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien',
                },
                {
                  videoReference: 'W27PaBSKaus',
                  place: 'Hünibach',
                  person: 'André',
                },
                {
                  videoReference: '37yvyVcqWew',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
          ],
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
                  person: 'Fabien',
                },
                {
                  videoReference: 'N-Mw1vqXfIg',
                  place: 'Quinten',
                  person: 'André',
                },
                {
                  videoReference: 'TE32xbmuDXU',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
            {
              title: '16:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien',
                },
                {
                  videoReference: 'zzoRYZ-HD-0',
                  place: 'Quinten',
                  person: 'André',
                },
                {
                  videoReference: 'YH5e06OGIb8',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
            {
              title: '23:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien',
                },
                {
                  videoReference: 'pF8G6aSVD7Y',
                  place: 'Quinten',
                  person: 'André',
                },
                {
                  videoReference: '7JQZsQwHzO0',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
          ],
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
                  person: 'Fabien',
                },
                {
                  videoReference: 'ZK4-6M0G-dk',
                  place: 'Hünibach',
                  person: 'André',
                },
                {
                  videoReference: 'A6UJaR4-P88',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
            {
              title: '16:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien',
                },
                {
                  videoReference: 'w85gUG7kuj8',
                  place: 'Hünibach',
                  person: 'André',
                },
                {
                  videoReference: 'qHT-9fFA2rk',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
            {
              title: '23:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien',
                },
                {
                  videoReference: '58903tO0D10',
                  place: 'Hünibach',
                  person: 'André',
                },
                {
                  videoReference: 'eexk4pp_T8Y',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
          ],
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
                  person: 'Fabien',
                },
                {
                  videoReference: '8lQ_I60l824',
                  place: 'Hünibach',
                  person: 'André',
                },
                {
                  videoReference: '4oel9Y1fq-c',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
            {
              title: '16:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien',
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André',
                },
                {
                  videoReference: 'HkRL5nIfIQw',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
            {
              title: '23:00',
              items: [
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Schmitten',
                  person: 'Fabien',
                },
                {
                  videoReference: 'Ks80rsSehpU',
                  place: 'Hünibach',
                  person: 'André',
                },
                {
                  videoReference: '4frJ-QME0n4',
                  place: 'Adliswil',
                  person: 'Luka',
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
