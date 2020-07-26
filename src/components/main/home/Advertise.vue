<template>
  <div id="main-home-advertise" :style="{backgroundColor: $vuetify.theme.themes.light.bb1}">
    <v-container class="py-8 py-sm-16">
      <div class="mb-10">
        <h3 class="text-h5 text-sm-h4 font-weight-bold mb-n2">Anuncie seu imóvel</h3>
        <img src="../../../assets/img/ornament.svg" />
      </div>
      <div>
        <v-row>
          <v-col cols="12" sm="4" v-for="(item, i) in items" :key="i">
            <div class="d-flex justify-center align-center">
              <div class="d-flex flex-column align-center text-center">
                <v-img contain width="112" height="112" :src="item.img" />
                <span class="my-3 font-weight-medium">{{ item.title }}</span>
                <span :style="{'max-width': '240px'}" class="text-caption">{{ item.text }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="d-flex justify-center mt-10">
        <v-btn
          :to="{ name: 'MainAnnounce' }"
          dark
          outlined
          color="bp"
          :width="$vuetify.breakpoint.xs ? '100%' : '380'"
        >ANUNCIAR IMÓVEL</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import house from "../../../assets/img/house.svg";
import money from "../../../assets/img/money.svg";
import shield from "../../../assets/img/shield.svg";

export default {
  data: () => ({
    items: [
      {
        img: house,
        title: "Alugamos muito mais rápido",
        text:
          "A gente usa tecnologia para achar o inquilino certo e seu imóvel fica menos tempo parado.",
      },
      {
        img: money,
        title: "Depositamos seu aluguel em dia",
        text:
          "Você recebe no dia combinado, mesmo se o inquilino ficar inadimplente, sem burocracia.",
      },
      {
        img: shield,
        title: "Cuidamos do aluguel do começo ao fim",
        text:
          "A gente usa tecnologia para achar o inquilino certo e seu imóvel fica menos tempo parado.",
      },
    ],
  }),
};
</script>

<style>
</style>