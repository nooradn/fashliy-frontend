<template>
  <div class="dashboard-container"></div>
</template>

<script>
export default {
  name: 'Dashboard',
  metaInfo: {
    title: 'dashboard - Fashliy - Islamic Learning Platform',
    meta: [
      {
        property: 'og:title',
        content: 'dashboard - Fashliy - Islamic Learning Platform',
      },
    ],
  },
}
</script>

<style scoped>
.dashboard-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
