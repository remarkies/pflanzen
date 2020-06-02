<template>
    <div>
        <Header name="Luka" :description="description" />
        <div class="container-lg">
            <Article collapsible :key="article.title" :article="article" v-for="article in articles"/>
        </div>
    </div>
</template>

<script>
    import Article from "@/components/Article";
    import Header from "@/components/Header";
    import DataSet from "@/modules/dataset-generator"

    export default {
        name: "Luka",
        components: {Article, Header},
        data: function() {
            return {
                articles: [],
                description: 'Im Rahmen des Studiengangs Digital Ideation wählte ich das IDA-Modul Pflanzen. Das Ziel war die Auseinandersetzung mit einem von mir bis dahin unvertrauten aber dennoch interessantem Thema, mein Garten und sein Ökosystem. Dies untersuchten meine Studienkollegen und ich anhand der Methoden der ästhetischen Forschung und stellten Vergleiche auf, um mögliche Unterschiede zu entdecken.<br><br>Jeder von uns vertiefte sich noch in ein eigenes Thema. Ich widmete mich dem Wachstum der eigen gesetzten Pflanzen und versuchte mich in diversen Techniken. Ich fand Anwendung in der Foto- und Videografie.'
            }
        },
        methods: {
            initArticles: function() {
                let wanne = DataSet.createArticle("Gemüsewald ","Neben dem Gemüsetopf entschied ich mich eine von Unkraut zugewachsene Zinkwanne neu zu bepflanzen. Dafür entfernte ich das Unkraut und vermischte die vorhandene Erde mit Freilanderde. Ich recherchierte im Internet, welche Pflanzen nebeneinander gepflanzt werden dürfen und stellte mir eine Liste mit Pflanzen zusammen, die sich äusserlich stark unterscheiden, um ein Interessantes Zusammenleben zu erzeugen. Ich besorgte Mangold, Pfefferminze, Süsskartoffel, Kapuzinerkresse, gemischte Salatsetzlinge und Radieschensamen. Damit einzelne Exemplare nicht untergehen, setzte ich die grösseren Pflanzen weiter hinten und die Kleineren davor. Die Radieschensamen wurden am Rand entlang verteilt und mit Aussaaterde überdeckt.",
                    [
                        DataSet.createImageSet("3 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session1/Wanne-3.jpg", 12),
                                DataSet.createImage("/img/luka/wanne/session1/Wanne-2.jpg", 3),
                                DataSet.createImage("/img/luka/wanne/session1/Wanne_Session_1-3.jpg", 9),
                                DataSet.createImage("/img/luka/wanne/session1/Wanne_Session_1-1.jpg", 5),
                                DataSet.createImage("/img/luka/wanne/session1/Wanne_Session_1-2.jpg", 7),
                            ])
                        ]),
                        DataSet.createImageSet("3 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session2/Wanne_Session_2-1.jpg", 12),
                                DataSet.createImage("/img/luka/wanne/session2/Wanne-1.jpg", 6),
                                DataSet.createImage("/img/luka/wanne/session2/Wanne-3.jpg", 6)
                            ])
                        ]),
                        DataSet.createImageSet("5 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session3/Wanne-5.jpg", 12),

                                DataSet.createImage("/img/luka/wanne/session3/Wanne_Session_3-3.jpg", 6),
                                DataSet.createImage("/img/luka/wanne/session3/Wanne-3.jpg", 6),
                            ])
                        ]),
                        DataSet.createImageSet("4 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session4/Wanne_Session_4-2.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session4/Wanne_Session_4-1.jpg", 8),

                                DataSet.createImage("/img/luka/wanne/session4/Wanne-5.jpg", 6),
                                DataSet.createImage("/img/luka/wanne/session4/Wanne_Session_4-3.jpg", 6),
                            ])
                        ]),
                        DataSet.createImageSet("5 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session5/Wanne-6.jpg", 6),
                                DataSet.createImage("/img/luka/wanne/session5/Wanne-4.jpg", 6),
                                DataSet.createImage("/img/luka/wanne/session5/Wanne-7.jpg", 8),
                                DataSet.createImage("/img/luka/wanne/session5/Wanne-3.jpg", 4),
                            ])
                        ]),
                        DataSet.createImageSet("Im Laufe von circa 4 Wochen hat sich die Zinkwanne sehr schön entwickelt. Alles Gesetzte ist stark gewachsen und der Schnittsalat wäre bereit zur Ernte. Zwischenzeitlich mussten Razzien durchgeführt werden, um Schnecken das Weite zu zeigen. Gegossen wurde nur in den ersten paar Tagen, danach regnete es von alleine. Die Kapuzinerkresse hat mich am meisten überrascht. Sie entwickelte schnell neue Triebe und schoss empor.", false, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-6.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-4.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-8.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-9.jpg", 12)
                            ])
                        ]),
                        DataSet.createImageSet("Geplant war erneut eine Intervallaufnahme für die Zinkwanne. Bei Betrachtung des Ergebnisses war die Feststellung, dass die Pflanzen zu stark vom Winde bewegt werden und entschied mich daher das Endresultat der Zinkwanne mit dem \"Macro Probe\"-Objektiv festzuhalten.<br/>" +
                            "Hier verwendete ich den Ansatz so wenig Pflanzen, wie möglich zu berühren, damit die Zwischenräume deutlich grösser Wirken und ein sogenannter Gemüsewald entsteht. Durch die neue Herangehensweise stieg auch die Herausforderung an die ruhige Hand, denn ungleichmässige Bewegungen werden viel schneller ersichtlich.", false, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-1.jpg", 12),
                            ])
                        ]),
                        DataSet.createImageSet("", false, [
                            DataSet.createRow([
                                DataSet.createVideo("https://www.youtube.com/embed/blhPA-Mpq9c", 12, "16by9")
                            ])
                        ])
                    ]);

                let topf = DataSet.createArticle("Gemüsetopf","Die Bepflanzung eines Gemüsetopfes war der Versuch eine durchmischte dichte Gemüseeinheit zu erschaffen. Damit der Topf von Beginn an etwas hergibt, entschied ich mich Pflanzen in unterschiedlichen Stadien hochzuziehen. Den Topf befüllte ich mit Freilanderde und einer Schicht Aussaaterde. Danach pflanzte ich Schnitt- und Kopfsalatsetzlinge, setzte vorgekeimte Petersilie und verteilte Radieschensamen.",
                    [
                        DataSet.createImageSet("4 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session01/Topf-Session1-2.jpg", 12)
                            ])
                        ]),
                        DataSet.createImageSet("7 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session03/Topf-Session3-8.jpg", 8),
                                DataSet.createImage("/img/luka/topf/session03/Topf-Session3-2.jpg", 4)
                            ])
                        ]),
                        DataSet.createImageSet("4 Tage", true, [
                            DataSet.createRow([

                                DataSet.createImage("/img/luka/topf/session05/Topf-Session5-5.jpg", 4),
                                DataSet.createImage("/img/luka/topf/session05/Topf-Session5-2.jpg", 8),
                            ])
                        ]),
                        DataSet.createImageSet("8 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session06/Topf-Session6-5.jpg", 4),
                                DataSet.createImage("/img/luka/topf/session06/Topf-Session6-6.jpg", 8)
                            ])
                        ]),
                        DataSet.createImageSet("Durch die geringe Höhe der Pflanzen im Gemüsetopf werden diese kaum vom Winde beweget, weshalb der Topf beim Betrachten sehr statisch wirkt. \n" +
                            "Die Intervallaufnahme zeigt die laufenden Bewegungen, welche wir im Alltag nicht wahrnehmen.", false, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session07/Topf-7.jpg", 8),
                                DataSet.createImage("/img/luka/topf/session07/Topf-4.jpg", 4),
                            ])
                        ]),
                        DataSet.createImageSet("Die Querschnitt-Aufnahme war ein Experiment die Dichte und Diversität des Topfes darzustellen und das Wachstum der vergangenen Wochen zu veranschaulichen. <br/>" +
                            "Die grosse Herausforderung hierbei war die Handhabung der Kamera und dem speziellen Objektiv (Laowa - Macro Probe). Das Makro-Objektiv ist durch ihre maximale Blendenöffnung von f/14 im Normalfall an eine helle Umgebung oder externe Lichtquelle angewiesen. In meinem Fall war dies die pralle Mittagssonne, weil es sonst nicht genügend natürliches Licht im Gestrüpp hatte. Die nächste Hürde war das gleichmässige zurückziehen der Kamera, wofür nachträglich eine Kameraschiene besorgt wurde. Hierbei handelte es sich leider nicht um eine automatische Schiene, sondern musste von Hand gezogen werden. Zu Beginn versuchte ich die maximal mögliche Schärfentiefe zu bekommen (f/40), was dazu führte, dass beim Betrachten der Resultate kleine schwarze fixe Punkte erschienen sind. Trotz versuchter Reinigung des Kamerasensors verschwanden die Punkte nicht und entschied mich deswegen die Schärfentiefe zu minimieren, sodass die Punkte verschwanden.", false, [
                            DataSet.createRow([
                                DataSet.createVideo("https://www.youtube.com/embed/V8cSKbnyRiQ", 12, "3by2")
                            ])
                        ]),
                        DataSet.createImageSet("", false, [
                            DataSet.createRow([
                                DataSet.createVideo("https://www.youtube.com/embed/4xh0uyelH6A", 12, "16by9")
                            ])
                        ])
                    ]);


                this.articles.push(topf);
                this.articles.push(wanne);
            }
        },
        mounted: function() {
            this.initArticles();
        }
    }
</script>

<style scoped>
</style>