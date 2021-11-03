<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName">
    <span class="navigation-links-text">{{ text }}</span>
    <span class="navigation-links-text1">{{ text3 }}</span>
    <span class="navigation-links-text2">{{ text4 }}</span>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    rootClassName: String,
    text4: {
      type: String,
      default: 'Tentang',
    },
    text: {
      type: String,
      default: 'Katalog',
    },
    text3: {
      type: String,
      default: 'Harga',
    },
  },
}
</script>

<style scoped>
.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links-text {
  color: var(--dl-color-gray-white);
}
.navigation-links-text1 {
  color: var(--dl-color-gray-white);
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text2 {
  color: var(--dl-color-gray-white);
  margin-left: var(--dl-space-space-twounits);
}
.rootClassName1 {
  align-self: stretch;
}
@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-text {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
