<template>
  <div class="gallery-card1-gallery-card" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="gallery-card1-image" />
    <h2 class="gallery-card1-text">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'GalleryCard1',
  props: {
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    title: {
      type: String,
      default: 'Video',
    },
    image_src: {
      type: String,
      default: '/playground_assets/frame%2017-1200h.png',
    },
  },
}
</script>

<style scoped>
.gallery-card1-gallery-card {
  width: 300px;
  margin: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery-card1-image {
  width: 300px;
  height: 170px;
  object-fit: cover;
}
.gallery-card1-text {
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}






@media(max-width: 767px) {
  .gallery-card1-gallery-card {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .gallery-card1-image {
    height: 10rem;
  }
}
</style>
