<template>
  <div>
    <Header
      name="André"
      :description="description"
    />

    <section class="container-xl">
      <Article
        v-for="article in articles"
        :key="article.title"
        :article="article"
        collapsible
      />
    </section>
  </div>
</template>

<script>
import Article from '@/components/Article';
import Header from '@/components/Header';
import DataSet from '@/modules/dataset-generator';

export default {
  name: 'André',
  components: {
    Header,
    Article,
  },
  data() {
    return {
      description: 'Das Ökosystem des eigenen Gartens liegt zwar physisch nahe, und ist mir doch auf eine Art fern. Durch meinen von Technik dominierten Alltag verweile ich meistens nur noch zum Sport oder zur Entspannung in der Natur und nehme mir selten Zeit, Details und die Faszination der gesamten Biodiversität zu entdecken.<br><br>Im IDA-Modul Pflanzen wollte ich mich mit dem Ökosystem meines Gartens in Hünibach und dem Garten des Ferienhauses in Quinten auseinandersetzen und dabei Vergleiche zu meinen Studienkollegen ziehen. Zusätzlich zu diesen Vergleichen habe ich mich mit dem Sähen von Blumen, dem aufziehen von Gemüse und mit Schwalbenschwanz-Schmetterlingen auseinandergesetzt.',
      articles: [],
    };
  },
  mounted() {
    this.initArticles();
  },
  methods: {
    initArticles() {
      const articleBlumen = DataSet.createArticle(
        'Blumen sähen 🌻',
        'Um das Aufwachsen von Pflanzen zu erleben, habe ich Holzkisten zu Pflanzentöpfen umgebaut und darin 8 verschiedene Blumensorten angesät, die aus meiner Sicht farblich zueinander passen. Als Experiment und aufgrund der Corona-Situation habe ich Samen verwendet, die man von der Migros als Trophy bei jedem Einkauf erhalten hat.<br>Zusätzlich zu den Blumen in den Holzkisten habe ich Schnittlauch- und Sonnenblumen-Samen in eigenen Töpfen geplanzt.<br><br>Die ausgewählten Blumenarten sind Löwenmaul, Schmuckkörbchen, Zinnie, Kamille, Duftsteinrich, Kornblume, Klatsch-Mohn und Phazilie.',
        [
          // 19.04.2020
          DataSet.createImageSet('5 Tage', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0293.jpeg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0298.jpeg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0309.jpeg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0330.jpeg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-1/IMG_0332.jpeg', 6),
            ]),
          ]),
          // 24.04.2020
          DataSet.createImageSet('1.5 Wochen', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8520.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8521.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8523.jpeg', 3),
              DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8524.jpeg', 3),
              // DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8527.jpeg', 6),
              // DataSet.createImage('/img/andre/blumen-kisten/set-2/IMG_8526.jpeg', 6),
            ]),
          ]),
          // 07.05.2020
          DataSet.createImageSet('1.5 Wochen', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-4/20200507-DT4A9028-Web.jpg', 12),
              DataSet.createImage('/img/andre/blumen-kisten/set-4/20200507-DT4A9036-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-4/20200507-DT4A9037-Web.jpg', 6),
            ]),
          ]),
          // 19.05.2020
          DataSet.createImageSet('2 Tage', true, [
            DataSet.createRow([
              // DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9139-Web.jpg', 12),
              // DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9140-Web.jpg', 6),
              // DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9143-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-5/20200519-DT4A9147-Web-2.jpg', 12),
            ]),
          ]),
          // 21.05.2020
          DataSet.createImageSet('1 Woche', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9209-Web.jpg', 12),
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9214-Web.jpg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9211-Web.jpg', 4),
              DataSet.createImage('/img/andre/blumen-kisten/set-6/20200521-DT4A9218-Web.jpg', 4),
            ]),
          ]),
          // 28.05.2020
          DataSet.createImageSet('1 Woche', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-7/20200528-DT4A9294-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-7/20200528-DT4A9280-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-7/20200528-DT4A9288-Web.jpg', 8),
              DataSet.createImage('/img/andre/blumen-kisten/set-7/20200528-DT4A9291-Web-2.jpg', 4),
            ]),
          ], 'Die Phazilien sind im Gegensatz zum Klatsch-Mohn viel schneller gewachsen. Der Klatsch-Mohn (links) besteht zu diesem Zeitpunkt noch immer aus ganz kleinen Sprösslingen. Aus diesem Grund musste ich eine Einrichtung machen, die die Phazilien hoch hält und dem Klatschmohn somit trotzdem Sonne gewährt.'),
          // 02.06.2020
          DataSet.createImageSet('Fast alle Blumensorten sind noch einmal stark in die Höhe gewachsen. Vor allem die Schmuckkörbchen und die Phazilien sind grösser als alle anderen.', false, [
            DataSet.createRow([
              // DataSet.createImage('/img/andre/blumen-kisten/set-8/20200603-DT4A9364-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-8/20200603-DT4A9378-Web.jpg', 12),
              DataSet.createImage('/img/andre/blumen-kisten/set-8/20200603-DT4A9356-Web.jpg', 6),
              DataSet.createImage('/img/andre/blumen-kisten/set-8/20200603-DT4A9364-Web.jpg', 6),
            ]),
          ]),
          DataSet.createImageSet('Der Klatsch-Mohn ist leider trotz guter Pflege und Hochbindung der Phazilien weiterhin nicht gewachsen. Vielleicht war die Zeit mit zu viel Schatten zu lange, oder er hatte zu wenig oder zu viel Wasser.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-8/20200603-DT4A9353-Web.jpg', 12),
            ]),
          ]),
          DataSet.createImageSet('Leider hat bis zum Ende dieses Experiments nur eine der angesäten Blumen begonnen zu blühen: Der Duftsteinrich hat als einziger eine ganz kleine Blüte gemacht. Trotzdem bin ich sehr zufrieden mit dem Ergebnis! 7 von 8 Sorten in den Kisten sind gesprossen und bis heute in gutem Zustand. Sobald die Blumen noch etwas grösser sind werde ich die Kisten an einen Standort platzieren, bei dem sie gut sichtbar sind und die Kombination der Pflanzen zum Vorschein kommt.<br><br>Die in den Töpfen angesäten Sonnenblumen sind ebenfalls zahlreich gesprossen, weshalb ich diese bald in die freie Erde pflanzen werde. Der Schnittlauch ist das einzige angesäte Kraut, welches sich bis zum Schluss leider nicht zeigte.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/blumen-kisten/set-8/20200603-DT4A9382-Web.jpg', 12),
            ]),
          ]),
        ],
        'blumen-kisten'
      );

      const articleGemueseHuenibach = DataSet.createArticle(
        'Salat-Setzlinge 🥬',
        'In unserem Team haben wir abgemacht, je einen Kopfsalat-Setzling zu pflanzen und sein Aufwachsen fotografisch zu dokumentieren.',
        [
          // 06.05.2020
          DataSet.createImageSet('Die Setzlinge kaufte ich gleich nach der Wiedereröffnung in einer lokalen Gärtnerei. Ich entschied mich, zusätzlich zum grünen Kopfsalat auch noch einen roten Kopfsalat, einen Lattich und einen Eisbergsalat zu kaufen - je ein Stück für Hünibach und eines für Quinten.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/salat-thun/set-1/IMG_9294.jpeg', 8),
              DataSet.createImage('/img/andre/salat-thun/set-1/IMG_9909.jpeg', 4),
            ]),
          ]),
          // 07.05.2020
          DataSet.createImageSet('Kaum waren die Setzlinge im Boden, wurden sie von meiner Katze entdeckt. Um die Salate davor zu schützen, dass die Katze sie ausgräbt oder sich darauf legt, habe ich um jeden Salat kleine Holzstäbchen eingesteckt.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/salat-thun/set-2/IMG_6919.jpeg', 4),
              DataSet.createImage('/img/andre/salat-thun/set-2/20200507-DT4A9090-Web.jpg', 8),
            ]),
          ]),
          DataSet.createImageSet('1 Woche', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/salat-thun/set-2/20200507-DT4A9089-Web.jpg', 6),
              DataSet.createImage('/img/andre/salat-thun/set-2/20200507-DT4A9091-Web-2.jpg', 3),
              DataSet.createImage('/img/andre/salat-thun/set-2/20200507-DT4A9092-Web-2.jpg', 3),
            ]),
          ]),
          // 21.05.2020
          DataSet.createImageSet('1 Woche', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/salat-thun/set-3/20200521-DT4A9187-Web.jpg', 12),
              DataSet.createImage('/img/andre/salat-thun/set-3/20200521-DT4A9194-Web.jpg', 4),
              DataSet.createImage('/img/andre/salat-thun/set-3/20200521-DT4A9208-Web.jpg', 4),
              DataSet.createImage('/img/andre/salat-thun/set-3/20200521-DT4A9203-Web.jpg', 4),
            ]),
          ]),
          // 28.05.2020
          DataSet.createImageSet('1 Woche', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/salat-thun/set-4/20200528-DT4A9315-Web.jpg', 12),
              DataSet.createImage('/img/andre/salat-thun/set-4/20200528-DT4A9299-Web.jpg', 4),
              DataSet.createImage('/img/andre/salat-thun/set-4/20200528-DT4A9310-Web.jpg', 4),
              DataSet.createImage('/img/andre/salat-thun/set-4/20200528-DT4A9313-Web.jpg', 4),
            ]),
          ], 'Beim Eisbergsalat ist nun erstmals zu erkennen, dass er sich in seine bekannte Form "einrollt".'),
          // 28.05.2020
          DataSet.createImageSet('', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/salat-thun/set-5/20200603-DT4A9327-Web.jpg', 4),
              DataSet.createImage('/img/andre/salat-thun/set-5/20200603-DT4A9330-Web.jpg', 8),
              DataSet.createImage('/img/andre/salat-thun/set-5/20200603-DT4A9339-Web.jpg', 8),
              DataSet.createImage('/img/andre/salat-thun/set-5/20200603-DT4A9342-Web.jpg', 4),
            ]),
          ], 'Vor allem der grüne Kopfsalat hat in der letzten Woche dieses Experiments noch grosse Fortschritte gemacht. Seine Form ist schon klar erkennbar und er hat schon einige neue Blätter gebildet. Auch der Lattich hält sich gut und wächst gleichmässig in die Höhe.<br>Weniger gewachsen sind der Eisberg-Salat und der rote Kopfsalat. Der Eisbergsalat wurde vom wachsenden Kiwi-Baum fast ganz zugedeckt, weshalb ihm nun wohl häufig die Sonne fehlt. Der rote Kopfsalat hat das selbe Problem und leidet unter dem angrenzenden Teefenchel, der seit Beginn des Experiments seine Höhe sicher verdoppelt hat.'),
        ],
        'salat-thun'
      );

      const articleGemueseQuinten = DataSet.createArticle(
        'Gartenbeet-Bau Quinten 🌱',
        'Um das Ökosystem beim Ferienhaus in Quinten mit dem bei mir zu Hause und den meiner Kollegen zu vergleichen, wollte ich auch dort Gemüse anbauen. Damit dies möglich wurde, musste ich jedoch zuerst ein Gemüsebeet bauen.',
        [
          // 02.05.2020
          DataSet.createImageSet('1 Woche', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/garten-quinten/set-1/IMG_5837.jpeg', 4),
              DataSet.createImage('/img/andre/garten-quinten/set-1/IMG_0485.jpeg', 4),
              DataSet.createImage('/img/andre/garten-quinten/set-1/IMG_0484.jpeg', 4),
            ]),
          ], 'In einer ersten Etappe erstellte ich nur ein kleines Beet um die Kartoffeln für den Kartoffel-Vergleich setzen zu können.'),
          // 10.05.2020
          DataSet.createImageSet('2 Wochen', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/garten-quinten/set-2/IMG_6194.jpeg', 12),
              DataSet.createImage('/img/andre/garten-quinten/set-2/IMG_2973.jpeg', 4),
              DataSet.createImage('/img/andre/garten-quinten/set-2/IMG_1395.jpeg', 8),
            ]),
          ], 'Als ich danach bei meinem Besuch in der Gärtnerei die Salat-Setzlinge gekauft hatte, musste ich das Beet massiv vergrössern, damit alles seinen Platz findet. Während dem Einkauf hatte ich zudem die Idee, zusätzlich Schnittlauch und Basilikum zu kaufen, um künftig frische Kräuter vor Ort zu haben. Um Schmetterlinge anzuziehen kaufte ich mir zusätzlich einen Teefenchel.<br><br> Als erstes habe ich die Wiese mit einer Stechgabel ausgestochen und dabei versucht, möglichst grosse Wiesen-Stücke inkl. Wurzeln entfernen zu können. Schnell fiel mir auch auf, dass es in diesem Bereich sehr viele Steine hat - um das zukünftige Arbeiten im Gemüse-Garten möglichst agenehm zu gestalten, versuchte ich entsprechend möglichst viele Steine auszugraben und wegzuführen.'),
          // 23.05.2020
          DataSet.createImageSet('Bei meinem nächsten Besuch in Quinten musste ich mit Schrecken feststellen, dass der ganze rote Kopfsalat von Schnecken gefressen wurde.<br>Entsprechend besorgte ich Schneckenkörner und verteilte diese rund um die geplanzten Setzlinge.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/garten-quinten/set-3/IMG_5925.jpeg', 3),
              DataSet.createImage('/img/andre/garten-quinten/set-3/IMG_5923.jpeg', 3),
              DataSet.createImage('/img/andre/garten-quinten/set-3/IMG_5927.jpeg', 3),
              DataSet.createImage('/img/andre/garten-quinten/set-3/IMG_5924.jpeg', 3),
            ]),
          ]),
          // 24.05.2020
          DataSet.createImageSet('1 Woche', true, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/garten-quinten/set-3/IMG_5936.jpeg', 12),
            ]),
          ], 'Ich ergänzte das Garten-Beet zusätzlich mit marrokanischer Minze, Oregano und Basilikum. Zudem musste ich schon das erste Mal jäten.<br><br>Hinten links ist zu erkennen, wie stark der Teefenchel innerhalb dieser 2 Wochen gewachsen ist. Leider war jedoch noch kein Schmetterlings-Ei darauf zu finden.'),
          // 31.05.2020
          DataSet.createImageSet('Die Salate haben sich dank schönem Wetter gut entwickelt. Im Vergleich zu Hünibach sind sie jedoch um einiges kleiner - ich gehe davon aus, dass dies zum einen wegen dem Boden ist, zum anderen weil es wahrscheinlich gar etwas zu warm war. Diese Hitze sieht man dem <b>grünen Kopfsalat</b> am besten an, da einige Blätter gelb wurden.<br>Der <b>rote Kopfsalat</b> konnte sich etwas von den Schnecken erholen, jedoch bezweifle ich, dass dieser noch zu einem schönen, grossen Salat heranwächst. Beim <b>Eisbergsalat</b> kann man nun auch hier die Verwandlung zur Kugel ein wenig erkennen.<br><br>Allgemein ist zu sehen, dass die Schneckenkörner offensichtlich ihre Arbeit gut machen.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-1/IMG_6006.jpeg', 8),
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-1/IMG_5990.jpeg', 4),
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-1/IMG_5989.jpeg', 4),
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-1/IMG_6003.jpeg', 8),
            ]),
          ]),
          DataSet.createImageSet('Die angesetzten Kräuter haben sich innerhalb dieser Woche nur wenig verändert. Für den <b>Basilikum</b> war es wohl etwas zu warm, weshalb dieser auch etwas gelb wurde.<br>Auf dem <b>Teefenchel</b> ist bisher leider kein Schmetterlings-Ei und auch keine Raupe zu finden.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-2/IMG_6011.jpeg', 3),
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-2/IMG_5997.jpeg', 3),
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-2/IMG_5999.jpeg', 3),
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-2/IMG_6002.jpeg', 3),
            ]),
          ]),
          DataSet.createImageSet('Es war nun auch an der Zeit die <b>Kartoffeln</b> für unseren Kartoffel-Vergleich auszugraben. Innerhalb der dieser Woche haben die Kartoffeln erste Blätter gebildet, die es bis über die Oberfläche schafften.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-3/IMG_6022.jpeg', 4),
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-3/IMG_6030.jpeg', 4),
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-3/IMG_6035.jpeg', 4),
            ]),
          ]),
          DataSet.createImageSet('Dies ist somit der letzte Zwischenstand meines Gemüsegartens in Quinten für dieses Projekt. Ich wede die Bewirtschaftung jedoch weiter verfolgen, fleissig giessen und jäten, und freue mich schon darauf, die selbst angesetzten Kräuter und die Salate in meine Gerichte einzubauen. Auch künftig will ich hier selbst Gemüse anziehen, um mehr Lebensmittel direkt aus dem Garten konsumieren zu können.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/garten-quinten/set-4/part-2/IMG_8212.jpeg', 12),
            ]),
          ]),
        ],
        'garten-quinten'
      );

      const articleSchnmetterlinge = DataSet.createArticle(
        'Von der Raupe zum Schmetterling 🐛',
        'Als ich zu Beginn des Moduls damit begann, mich mit dem Ökosystem meines Gartens auseinanderzusetzen, stiess ich schnell auf die Schwalbenschwanz-Schmetterlinge, die meine Mutter seit dem letzten Jahr aufzieht. Ich bin selbst fasziniert von der Verwandlung eines winzigen Eis in eine Raupe und schlussendlich in einen Schmetterling. Diesen Weg versuchte ich fotografisch festzuhalten.<br><br>Zudem kaufte ich einen neuen Teefenchel, welchen ich in mein Gartenbeet in Quinten pflanzte. Ich hoffte auch dort Schwalbenschwänze anziehen zu können. Leider hat in der Dauer des Experiments kein Schmetterling seine Eier auf die neue Pflanze gelegt.',
        [
          DataSet.createImageSet('Alles beginnt mit winzigen Eiern, die von Schwalbenschwanz-Schmetterlingen gelegt werden. Diese findet man vor allem auf Teefenchel-, Fenchel-, Karotten-, oder Dill-Kraut. In unserem Garten haben wir hierzu mehrere Teefenchel, Fenchel und Dill gepflanzt. Die Eier habenn etwa eine Grösse von 1&nbsp;mm<sup>3</sup>.<br><br>Zuerst sind die Eier weiss/gelb, bis sie sich während etwa 2 Tagen immer dunkler verfärben, bis sie fast durchsichtig sind.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-1/20200507-DT4A9023-Web.jpg', 6),
              DataSet.createImage('/img/andre/schmetterlinge/set-1/20200507-DT4A9062-Web.jpg', 6),
            ]),
          ]),
          DataSet.createImageSet('Sobald eine Raupe schlüpft, isst sie als erstes die Schale des eigenen Eis. Die Raupen sind in diesem Zustand nur etwa 2 Millimeter gross.<br><br>Diese zu fotografieren ist eine ziemliche Herausforderung. Mit meinem <span class="text-monospace">24-70&nbsp;mm, f/2.8</span>-Objektiv habe ich eine Naheinstellgrenze von 0.38&nbsp;m. Habe ich den Zoom auf 70&nbsp;mm und den manuellen Fokus auf 0.38&nbsp;m eingestellt, ist das Räupchen mit meinem Fullframe-Sensor immer noch winzig klein im Bild. Da ich kein Makro-Objektiv besitze, versuchte ich die Bilder der ganz kleinen Tiere mit meiner alten Kamera, die einen APS-C Sensor hat, zu machen. So erreiche ich mit dem selben Objektiv einen Auschnitt, als würde ich ein 112&nbsp;mm-Objektiv (70*1.6) auf meiner Fullframe-Kamera verwenden. Das Bild hat so zwar eine tiefere Auflösung, dennoch sind auf diese Weise mehr Details vorhanden, als beim Beschneiden des Fullframe-Bildes.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-2/20200519-IMG_9173-Web.jpg', 12),
            ]),
          ]),
          DataSet.createImageSet('Junge Raupen sind fast ganz schwarz, haben orange Hörnchen und besitzen in der Mitte einen hellen Sattel. Dies lässt sie wie einen Vogel-Dreck aussehen, was ihnen dazu verhilft, nicht von Vögel gefressen zu werden.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-3/20200519-DT4A9114-Web.jpg', 12),
              DataSet.createImage('/img/andre/schmetterlinge/set-3/20200519-DT4A9113-Web.jpg', 6),
              DataSet.createImage('/img/andre/schmetterlinge/set-3/20200507-DT4A9088-Web.jpg', 6),
            ]),
          ]),
          DataSet.createImageSet('Die Raupen fressen schon mit kleiner Grösse sehr viel. Dies führt dazu, dass sie realtiv schnell wachsen und dabei die Haut zu klein wird. Aus diesem Grund <b>häuten</b> sich die Raupen bis zur Verpuppung ungefähr 4 Mal.<br>In ihrer dritten Phase verlieren sie nach meiner Beobachtung die Hauptfarbe Schwarz und erhalten Weiss als Grundfarbe.<br><br>Um die Tiere vor den Vögeln zu retten, nehmen wir sie jeweils spätestens in diesem Stadium in den Netz-Käfig.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-4/20200507-DT4A9079-Web.jpg', 4),
              DataSet.createImage('/img/andre/schmetterlinge/set-4/20200519-DT4A9119-Web.jpg', 4),
              DataSet.createImage('/img/andre/schmetterlinge/set-4/20200519-DT4A9116-Web.jpg', 4),
              DataSet.createImage('/img/andre/schmetterlinge/set-4/20200519-DT4A9117-Web.jpg', 12),
              DataSet.createImage('/img/andre/schmetterlinge/set-4/20200603-DT4A9386-Web.jpg', 12),
            ]),
          ]),
          DataSet.createImageSet('Bald erhalten die Raupen ihre bekannte hellgrün-schwarze Haut.<br>Je grösser die Raupen sind, desto mehr fressen sie. Dies merkt man vor allem, wenn man die Raupen auf mehreren Zweigen in einem Netz-Käfig hat - der Strauch schrumpft sichtlich und der Kot am Boden häuft sich schnell an.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-5/20200519-DT4A9115-Web.jpg', 12),
              DataSet.createImage('/img/andre/schmetterlinge/set-5/20200519-IMG_9170-Web.jpg', 6),
              DataSet.createImage('/img/andre/schmetterlinge/set-5/20200520-IMG_9181-Web.jpg', 6),
              DataSet.createImage('/img/andre/schmetterlinge/set-5/20200520-IMG_9177-Web.jpg', 12),
            ]),
          ]),
          DataSet.createImageSet('Nach etwa <b>einem Monat</b> als Raupe suchen sich die Tiere einen passenden, ruhigen Ort um sich zu verpuppen. Beim Verpuppen hängen sie sich meist senkrecht oder kopfüber an einen Ast oder einen sonstigen stabilen Gegenstand. Je nach Art dieses Ortes (Ast, Pflanzen-Stängel, ...) kann die Puppe eine andere Farbe annehmen: Von knallgrün bis braun oder grau. Dieser Ort kann in der Natur weit von der Nahrungsquelle entfernt sein. Im Raupenkasten hängen sie sich meistens an die stabilen Ecken.<br><br>Verpuppt sich die Raupe im Frühsommer, schlüpft der Schmetterling nach etwa 2-3 Wochen. Gehört die Raupe danach zu der zweiten Generation, verweilt sie den ganzen Herbst und Winter im Cocon und schlüpft schlussendlich im Mai.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-6/IMG_2949.jpeg', 4),
              DataSet.createImage('/img/andre/schmetterlinge/set-6/IMG_2951.jpeg', 4),
              DataSet.createImage('/img/andre/schmetterlinge/set-6/IMG_1312.jpeg', 4),
              DataSet.createImage('/img/andre/schmetterlinge/set-6/20200423-DT4A9012-Web-2.jpg', 8),
              DataSet.createImage('/img/andre/schmetterlinge/set-6/IMG_4139.jpeg', 4),
            ]),
          ]),
          DataSet.createImageSet('Am spitzen Hinterteil kann man erkennen, dass es sich hierbei um ein Männchen handelt.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-7/20200423-DT4A8995-Web.jpg', 12),
              DataSet.createImage('/img/andre/schmetterlinge/set-7/20200423-DT4A9007-Web.jpg', 8),
              DataSet.createImage('/img/andre/schmetterlinge/set-7/20200423-DT4A8997-Web.jpg', 4),
            ]),
          ]),
          DataSet.createImageSet('Bei diesem Schwalbenschwanz ist der eingerollte Rüssel gut zu erkennen.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-7/20200421-DT4A8974-Web.jpg', 12),
            ]),
          ]),
          DataSet.createImageSet('Aufgrund des eher runden Hinterteils ist hier erkennbar, dass dies wohl ein Weibchen ist. Zudem sind die Weibchen grösser als die Männchen.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-7/20200421-DT4A8980-Web.jpg', 4),
              DataSet.createImage('/img/andre/schmetterlinge/set-7/20200421-DT4A8990-Web.jpg', 8),
            ]),
          ]),
          DataSet.createImageSet('Nach der Paarung legen die Weibchen ihre winzigen Eier auf die Futterquellen der Raupen und der Zyklus beginnt wieder von vorne.', false, [
            DataSet.createRow([
              DataSet.createImage('/img/andre/schmetterlinge/set-7/20200525-DT4A9222-Web.jpg', 12),
            ]),
          ]),
        ],
        'schmetterlinge'
      );

      this.articles.push(articleBlumen, articleGemueseHuenibach, articleGemueseQuinten, articleSchnmetterlinge);
    },
  },
};
</script>

<style lang='scss' scoped>

</style>
