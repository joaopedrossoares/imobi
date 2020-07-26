<template>
  <v-navigation-drawer app v-model="drawer.isActive" disable-resize-watcher>
    <div class="pa-4">
      <div >
        <router-link :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-center">
          <v-img contain width="178" src="../../assets/img/delta-logo.png" />
        </div>
      </router-link>
      </div>
      <v-divider class="my-2" />
      <v-list-item-group>
        <v-list-group v-for="(drop, i) in drops" :key="i">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ drop.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item class="ml-2" :to="{ name: menu.to }" v-for="(menu, i) in drop.menus" :key="i">
            <v-list-item-subtitle>{{ menu.name }}</v-list-item-subtitle>
          </v-list-item>
        </v-list-group>
        <v-list>
          <v-list-item :to="{ name: item.to }" v-for="item in items" :key="item.name">
            <span>{{ item.name }}</span>
          </v-list-item>
        </v-list>
      </v-list-item-group>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    drawer: Object,
  },
  computed: {
    ...mapGetters({
      drops: "getDrops",
      items: "getItems",
    }),
  },
};
</script>

<style>
</style>