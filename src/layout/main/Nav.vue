<template>
  <nav>
    <Drawer :drawer="drawer" />
    <v-app-bar color="white" app >
      <v-app-bar-nav-icon class="d-block d-sm-none" @click="drawer.isActive = !drawer.isActive" />
      
      <div class="d-none d-sm-block">
        <router-link :to="{name: 'Home'}">
          <v-img width="114" contain src="../../assets/img/delta-logo.png" />
        </router-link>
      </div>
      <v-spacer />
      <div class="d-flex align-center">
        <div class="d-none d-sm-flex align-center">
          <v-list dense class="d-flex">
            <v-list-item exact v-for="drop in drops" :key="drop.name">
              <v-menu>
                <template v-slot:activator="{on}">
                  <div v-on="on" :style="{cursor: 'pointer'}" class="d-flex align-center">
                    <span>{{ drop.name }}</span>
                    <v-list-item-icon>
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-list-item-icon>
                  </div>
                </template>
                <v-list>
                  <v-list-item
                    :to="{ name: menu.to }"
                    color="bp"
                    v-for="menu in drop.menus"
                    :key="menu.name"
                  >
                    <span>{{ menu.name }}</span>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>
          </v-list>

          <v-list dense class="d-flex">
            <v-list-item exact :to="{ name: item.to }" v-for="item in items" :key="item.name">
              <span>{{ item.name }}</span>
            </v-list-item>
          </v-list>

          <v-divider class="mx-6" vertical />
        </div>

        <v-btn @click="dialog.isActive = true" color="bp" text>
          <span class="font-weight-bold">ENTRAR</span>
        </v-btn>
        <Dialog :dialog="dialog" />
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
import Drawer from "./Drawer";
import drawer from "@/mixins/drawer";
import Dialog from "./Dialog";
import { mapGetters } from "vuex";

export default {
  components: {
    Drawer,
    Dialog,
  },
  mixins: [drawer],
  data: () => ({
    dialog: {
      isActive: false,
    },
  }),
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