<template>
    <div class="session">
        <div class="picture" :key="image" v-for="image in session.images">
            <a v-bind:href="image"><img class="img" :src="image"/></a>
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
            };
        },
        methods: {
            showPicture: function(link) {
                return link;
            }
        },
        mounted: function() {


        }
    }
</script>

<style lang="scss" scoped>
    .session {
        margin: 20px 0px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        .picture {
            border-radius: 4px;
            overflow: hidden;
            background: gray;
            margin: 4px;
            img {
                display:block;
                object-fit: cover;
                width: 100%;
            }
        }
    }
</style>