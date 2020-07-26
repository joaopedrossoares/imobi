<template>
  <div>
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  data: () => ({
    markers: [
      { position: {lat: -19.9227318, lng: -43.9450948} },
      { position: {lat: -19.9227318, lng: -41.9450948} },
    ]
  })
};
</script>

<style>
</style>