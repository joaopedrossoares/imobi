<template>
  <div>
    <v-container class="py-8 py-sm-16">
      <v-tabs icons-and-text centered>
        <v-tab>
          <span>Fotos</span>
          <v-icon>mdi-image</v-icon>
        </v-tab>
        <v-tab>
          <span>Vídeo</span>
          <v-icon>mdi-video</v-icon>
        </v-tab>
        <v-tab>
          <span>Mapa</span>
          <v-icon>mdi-map</v-icon>
        </v-tab>
        <v-tab-item>oi</v-tab-item>
        <v-tab-item>oi</v-tab-item>
        <v-tab-item>oi</v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>