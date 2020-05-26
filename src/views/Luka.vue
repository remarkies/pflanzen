<template>
    <div>
        <Header name="Luka" :description="description" />
        <div class="container-lg">
            <Article :key="article.title" :article="article" v-for="article in articles"/>
        </div>
    </div>
</template>

<script>
    import Article from "@/components/Article";
    import Header from "@/components/Header";
    export default {
        name: "Luka",
        components: {Article, Header},
        data: function() {
            return {
                articles: [],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        },
        methods: {
            createImageDataSet: function(path, width) {
                return { path: path, width: width}
            },
            createRowDataSet: function(images) {
                let row = {
                    images: []
                };

                for(let i = 0; i < images.length; i++) {
                    row.images.push(images[i])
                }
                return row;
            },
            createImageSetDataSet: function(text, isConnector, rows) {
                let imageSet = {
                    text: text,
                    isConnector: isConnector,
                    rows: []
                };

                for(let i = 0; i < rows.length; i++) {
                    imageSet.rows.push({
                        id: i,
                        images: rows[i].images
                    });
                }
                return imageSet;
            },
            createArticleDataSet: function(title, description, imageSets) {
                let article = {
                    title: title,
                    description: description,
                    imageSets : []
                };

                for(let i = 0; i < imageSets.length; i++) {
                    article.imageSets.push({
                        id: i,
                        text: imageSets[i].text,
                        isConnector: imageSets[i].isConnector,
                        rows: imageSets[i].rows
                    });
                }
                return article;
            },

            init: function() {
                let article = this.createArticleDataSet("Gemüsetopf","Die Bepflanzung eines Gemüsetopfes war der Versuch den daraus folgenden Wachstum fotografisch festzuhalten. Es wurden Kopfsalat- und Schnittsalatsetzlinge gepflanzt, dazu vorgekeimte Petersilie und Radieschensamen verteilt.",
                    [
                        this.createImageSetDataSet("Session 01", true, [
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session01/Topf-Session1-1.jpg", 6),
                                this.createImageDataSet("/luka/topf/session01/Topf-Session1-2.jpg", 6)
                            ])
                        ]),
                        this.createImageSetDataSet("Session 02", true, [
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session02/Topf-Session2-1.jpg", 4),
                                this.createImageDataSet("/luka/topf/session02/Topf-Session2-2.jpg", 4),
                                this.createImageDataSet("/luka/topf/session02/Topf-Session2-4.jpg", 4)
                            ])
                        ]),
                        this.createImageSetDataSet("Session 03", true, [
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session03/Topf-Session3-1.jpg", 4),
                                this.createImageDataSet("/luka/topf/session03/Topf-Session3-2.jpg", 4),
                                this.createImageDataSet("/luka/topf/session03/Topf-Session3-3.jpg", 4)
                            ]),
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session03/Topf-Session3-4.jpg", 6),
                                this.createImageDataSet("/luka/topf/session03/Topf-Session3-5.jpg", 6)
                            ]),
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session03/Topf-Session3-6.jpg", 4),
                                this.createImageDataSet("/luka/topf/session03/Topf-Session3-7.jpg", 4),
                                this.createImageDataSet("/luka/topf/session03/Topf-Session3-8.jpg", 4)
                            ])
                        ]),
                        this.createImageSetDataSet("Lorem ipsum dolor sit amet,...", false, [
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session05/Topf-Session5-1.jpg", 8),
                                this.createImageDataSet("/luka/topf/session05/Topf-Session5-2.jpg", 4),
                            ]),
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session05/Topf-Session5-4.jpg", 4),
                                this.createImageDataSet("/luka/topf/session05/Topf-Session5-5.jpg", 4),
                                this.createImageDataSet("/luka/topf/session05/Topf-Session5-6.jpg", 4)
                            ]),
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session05/Topf-Session5-9.jpg", 6),
                                this.createImageDataSet("/luka/topf/session05/Topf-Session5-10.jpg", 6)
                            ])
                        ]),
                        this.createImageSetDataSet("", false, [
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session06/Topf-Session6-1.jpg", 5),
                                this.createImageDataSet("/luka/topf/session06/Topf-Session6-2.jpg", 4),
                                this.createImageDataSet("/luka/topf/session06/Topf-Session6-7.jpg", 3)
                            ]),
                            this.createRowDataSet([
                                this.createImageDataSet("/luka/topf/session06/Topf-Session6-5.jpg", 6),
                                this.createImageDataSet("/luka/topf/session06/Topf-Session6-6.jpg", 6)
                            ])
                        ])
                    ]);

                this.articles.push(article);
            }
        },
        mounted: function() {
            this.init();
        }
    }
</script>

<style scoped>
</style>