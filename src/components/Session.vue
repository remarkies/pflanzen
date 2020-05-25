<template>
    <div class="session">
        <div class="picture" :key="image" v-for="image in images">
            <img :src="image"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Session",
        props: {
            session: {}
        },
        data() {
            return {
                images: [],
            };
        },
        methods: {
            importAll(r) {
                r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            },
        },
        mounted: function() {
            this.importAll(require.context(this.session.imgs, true, /\.jpg$/));
            console.log(this.images);

        }
    }
</script>

<style scoped>

</style>