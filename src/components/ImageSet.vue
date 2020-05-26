<template>
    <div class="container">
        <div class="row" :key="row.id" v-for="row in imageSet.rows">
            <div :class="'col-'+image.width" :key="image.path" v-for="image in row.images">
                <a v-bind:href="image.path"><img class="img" :src="image.path"/></a>
            </div>
        </div>
        <div v-if="imageSet.text.length > 0" class="space" :class="[imageSet.isConnector? 'connector' : 'text']">
            <div v-if="imageSet.isConnector" class="vertical-line"></div>
            <p >{{imageSet.text}}</p>
            <div v-if="imageSet.isConnector" class="vertical-line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "imageSet",
        props: {
            imageSet: {}
        },
        data() {
            return {
            };
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    .container {
    }
    .col-12 {
        padding: 4px;
    }
    .col-11 {
        padding: 4px;
    }
    .col-10 {
        padding: 4px;
    }
    .col-9 {
        padding: 4px;
    }
    .col-8 {
        padding: 4px;
    }
    .col-7 {
        padding: 4px;
    }
    .col-6 {
        padding: 4px;
    }
    .col-5 {
        padding: 4px;
    }
    .col-4 {
        padding: 4px;
    }
    .col-3 {
        padding: 4px;
    }
    .col-2 {
        padding: 4px;
    }
    .col-1 {
        padding: 4px;
    }

    .row {
        align-items: stretch
    }
    a {
        display: block;
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }

    .space {
        display: flex;
        flex-direction: column;

        padding: 20px 0px;
        p {
            margin: 16px 0px;
        }
        .vertical-line {
            background: var(--color-gray-lighter);
            height: 30px;
            width: 4px;
            border-radius: 4px;
        }
    }

    .connector {
        align-items: center;
    }

    .connector p {
        font-weight: bold;
    }

    .text p {
        text-align: left;
    }
</style>