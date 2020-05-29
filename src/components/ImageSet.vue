<template>
  <div class="image-set">
    <div
      v-for="row in imageSet.rows"
      :key="row.id"
      class="row"
    >
      <div
        v-for="image in row.images"
        :key="image.path"
        :class="'col-'+image.width"
      >
        <CustomVideo
          v-if="image.ratio !== undefined"
          :video="image"
        />
        <a
          v-if="image.ratio === undefined"
          @click="initPhotoSwipe(image.path)"
        >
          <img
            ref="photoSwipeImages"
            class="img"
            :src="image.path"
          >
        </a>
      </div>
    </div>
    <div
      v-if="imageSet.text.length > 0"
      class="space"
      :class="[imageSet.isConnector? 'connector' : 'text']"
    >
      <div
        v-if="imageSet.isConnector"
        class="vertical-line"
      />
      <p>{{ imageSet.text }}</p>
      <div
        v-if="imageSet.isConnector"
        class="vertical-line"
      />
    </div>
  </div>
</template>

<script>
import CustomVideo from '@/components/CustomVideo';
import EventBus from '../modules/EventBus';

export default {
  name: 'ImageSet',
  components: { CustomVideo },
  props: {
    imageSet: Object,
  },
  methods: {
    initPhotoSwipe(imageSrc) {
      const imagesSrc = this.imageSet.rows
        .map(({ images }) => images.map(({ path }) => path))
        .flat();

      const items = [];
      const dimensions = this.$refs.photoSwipeImages.map((image) => ({ w: image.naturalWidth, h: image.naturalHeight }));
      imagesSrc.forEach((src, index) => {
        items.push({ src, ...dimensions[index] });
      });

      const index = imagesSrc.indexOf(imageSrc);

      EventBus.$emit('init-PhotoSwipe', items, index);
    },
  },
};
</script>

<style lang="scss" scoped>
.embed-responsive-3by2{
  &::before{
    padding-top: 2/3 * 100%;
  }
}

$grid-spacer: 4px;

.col-12 {
  padding: $grid-spacer;
}
.col-11 {
  padding: $grid-spacer;
}
.col-10 {
  padding: $grid-spacer;
}
.col-9 {
  padding: $grid-spacer;
}
.col-8 {
  padding: $grid-spacer;
}
.col-7 {
  padding: $grid-spacer;
}
.col-6 {
  padding: $grid-spacer;
}
.col-5 {
  padding: $grid-spacer;
}
.col-4 {
  padding: $grid-spacer;
}
.col-3 {
  padding: $grid-spacer;
}
.col-2 {
  padding: $grid-spacer;
}
.col-1 {
  padding: $grid-spacer;
}

.row {
  align-items: stretch;
  margin-left: -$grid-spacer;
  margin-right: -$grid-spacer;
}

a {
  display: block;
  height: 100%;
  cursor: pointer;
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
