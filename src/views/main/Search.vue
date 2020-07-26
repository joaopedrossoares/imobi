<template>
  <div class="main-search">
    <v-container>
      <h5 v-if="$route.query.rooms">Rooms: {{ $route.query.rooms }}</h5>
      <h5 v-if="$route.query.city">City: {{ $route.query.city }}</h5>
      <h5 v-if="$route.query.rent">Rent: {{ $route.query.rent }}</h5>
      <h5 v-if="$route.query.district">District: {{ $route.query.district }}</h5>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["search"],
};
</script>

<style>
</style>