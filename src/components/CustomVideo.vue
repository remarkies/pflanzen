<template>
    <div class="embed-responsive" :class="'embed-responsive-'+video.ratio">
        <iframe class="embed-responsive-item" :src="video.path" allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        name: "CustomVideo",
        props: {
            video: Object
        }
    }
</script>

<style lang="scss"  scoped>

</style>