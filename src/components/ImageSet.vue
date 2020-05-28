<template>
  <div class="container">
    <div class="row" :key="row.id" v-for="row in imageSet.rows">
      <div :class="'col-'+image.width" :key="image.path" v-for="image in row.images">
        <CustomVideo v-if="image.ratio !== undefined" :video="image"/>
        <a v-if="image.ratio === undefined" @click="initPhotoSwipe(image.path)">
          <img class="img" :src="image.path" ref="photoSwipeImages" />
        </a>
      </div>
    </div>
    <div
      v-if="imageSet.text.length > 0"
      class="space"
      :class="[imageSet.isConnector? 'connector' : 'text']"
    >
      <div v-if="imageSet.isConnector" class="vertical-line"></div>
      <p>{{imageSet.text}}</p>
      <div v-if="imageSet.isConnector" class="vertical-line"></div>
    </div>
  </div>
</template>

<script>
import EventBus from '../modules/EventBus';
import CustomVideo from "@/components/CustomVideo";

export default {
  name: "imageSet",
  components: {CustomVideo},
  props: {
    imageSet: Object
  },
  methods: {
    initPhotoSwipe: function(imageSrc) {
      const imagesSrc = this.imageSet.rows
        .map(({ images }) => {
          return images.map(({ path }) => {
            return path;
          });
        })
        .flat();

      let items = [];
      let dimensions = this.$refs.photoSwipeImages.map(image => {
        return { w: image.naturalWidth, h: image.naturalHeight };
      });
      imagesSrc.forEach((src, index) => {
        items.push({ src, ...dimensions[index] });
      });

      const index = imagesSrc.indexOf(imageSrc);

      EventBus.$emit('init-PhotoSwipe', items, index);
    }
  }
};
</script>

<style lang="scss" scoped>
  .embed-responsive-3by2{
    &::before{
      padding-top: 2/3 * 100%;
    }
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
  align-items: stretch;
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