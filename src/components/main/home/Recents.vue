<template>
  <div id="main-home-recents" :style="{backgroundColor: $vuetify.theme.themes.light.bb2}">
    <v-container class="py-8 py-sm-16">
      <div class="mb-10">
        <h3 class="text-h5 text-sm-h4 font-weight-bold mb-n2">Imóveis recentes</h3>
        <img src="../../../assets/img/ornament.svg" />
      </div>

      <slider ref="slider" :options="options">
        <slideritem :style="{width: sliderSize}" class="mx-1" v-for="(card, i) in cards" :key="i">
          <v-card :to="{ name: 'MainImobile', params: { id: card.id } }" class="text-left">
            <v-img contain :src="card.img" />
            <div class="pa-3 caption">
              <span class="grey--text text--darken-2">{{ card.type }}</span>
              <div class="mt-4 d-flex align-start">
                <v-icon small class="mr-2">mdi-map-marker</v-icon>
                <div class="d-flex flex-column justify-end">
                  <span class="font-weight-medium">{{ card.address[0] }}</span>
                  <span>{{ card.address[1] }}</span>
                </div>
              </div>
              <div>
                <v-divider class="my-3" />
                <div class="d-flex justify-center">
                  <div class="d-flex align-center mx-2" v-for="(icon, i) in card.icons" :key="i">
                    <v-icon class="mr-1">{{ icon.img }}</v-icon>
                    <span>{{ icon.value }}</span>
                  </div>
                </div>
                <v-divider class="my-3" />
                <div class="font-weight-bold">
                  <span class="mr-2">Aluguel:</span>
                  <span>R$ {{ card.price }}</span>
                </div>
              </div>
            </div>
          </v-card>
        </slideritem>
      </slider>
      <div class="mt-2">
        <v-btn class="mr-2" @click="$refs.slider.$emit('slidePre')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn @click="$refs.slider.$emit('slideNext')">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";

export default {
  components: {
    slider,
    slideritem,
  },
  data: () => ({
    cards: [
      {
        id: 1,
        img:
          "https://i0.wp.com/juneborn.com/wp-content/uploads/2019/05/Living-Room-Decoration-Ideas-with-Green-Plants-2.jpg?resize=640%2C427",
        type: "Apartamento",
        address: ["Rua Lorem", "Ipsum, domet"],
        icons: [
          {
            img: "mdi-car",
            value: "3",
          },
          {
            img: "mdi-bed",
            value: "3",
          },
          {
            img: "mdi-axis-arrow",
            value: "180 m²",
          },
        ],
        price: "1.800",
      },
      {
        id: 1,
        img:
          "https://i0.wp.com/juneborn.com/wp-content/uploads/2019/05/Living-Room-Decoration-Ideas-with-Green-Plants-2.jpg?resize=640%2C427",
        type: "Apartamento",
        address: ["Rua Lorem", "Ipsum, domet"],
        icons: [
          {
            img: "mdi-car",
            value: "3",
          },
          {
            img: "mdi-bed",
            value: "3",
          },
          {
            img: "mdi-axis-arrow",
            value: "180 m²",
          },
        ],
        price: "1.800",
      },
      {
        id: 2,
        img:
          "https://i0.wp.com/juneborn.com/wp-content/uploads/2019/05/Living-Room-Decoration-Ideas-with-Green-Plants-2.jpg?resize=640%2C427",
        type: "Apartamento",
        address: ["Rua Lorem", "Ipsum, domet"],
        icons: [
          {
            img: "mdi-car",
            value: "3",
          },
          {
            img: "mdi-bed",
            value: "3",
          },
          {
            img: "mdi-axis-arrow",
            value: "180 m²",
          },
        ],
        price: "1.800",
      },
      {
        id: 3,
        img:
          "https://i0.wp.com/juneborn.com/wp-content/uploads/2019/05/Living-Room-Decoration-Ideas-with-Green-Plants-2.jpg?resize=640%2C427",
        type: "Apartamento",
        address: ["Rua Lorem", "Ipsum, domet"],
        icons: [
          {
            img: "mdi-car",
            value: "3",
          },
          {
            img: "mdi-bed",
            value: "3",
          },
          {
            img: "mdi-axis-arrow",
            value: "180 m²",
          },
        ],
        price: "1.800",
      },
      {
        id: 4,
        img:
          "https://i0.wp.com/juneborn.com/wp-content/uploads/2019/05/Living-Room-Decoration-Ideas-with-Green-Plants-2.jpg?resize=640%2C427",
        type: "Apartamento",
        address: ["Rua Lorem", "Ipsum, domet"],
        icons: [
          {
            img: "mdi-car",
            value: "3",
          },
          {
            img: "mdi-bed",
            value: "3",
          },
          {
            img: "mdi-axis-arrow",
            value: "180 m²",
          },
        ],
        price: "1.800",
      },
      {
        id: 5,
        img:
          "https://i0.wp.com/juneborn.com/wp-content/uploads/2019/05/Living-Room-Decoration-Ideas-with-Green-Plants-2.jpg?resize=640%2C427",
        type: "Apartamento",
        address: ["Rua Lorem", "Ipsum, domet"],
        icons: [
          {
            img: "mdi-car",
            value: "3",
          },
          {
            img: "mdi-bed",
            value: "3",
          },
          {
            img: "mdi-axis-arrow",
            value: "180 m²",
          },
        ],
        price: "1.800",
      },
      {
        id: 6,
        img:
          "https://i0.wp.com/juneborn.com/wp-content/uploads/2019/05/Living-Room-Decoration-Ideas-with-Green-Plants-2.jpg?resize=640%2C427",
        type: "Apartamento",
        address: ["Rua Lorem", "Ipsum, domet"],
        icons: [
          {
            img: "mdi-car",
            value: "3",
          },
          {
            img: "mdi-bed",
            value: "3",
          },
          {
            img: "mdi-axis-arrow",
            value: "180 m²",
          },
        ],
        price: "1.800",
      },
      
    ],
  }),
  computed: {
    options() {
      return {
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        infinite: 2,
        slidesToScroll: 1,
      };
    },
    sliderSize() {
      const sizes = {
        xs: '99%',
        sm: '49.5%',
        md: '32.5%',
        lg: '24.5%'
      }
      if(this.$vuetify.breakpoint.xs) return sizes.xs
      if(this.$vuetify.breakpoint.sm) return sizes.sm
      if(this.$vuetify.breakpoint.md) return sizes.md
      if(this.$vuetify.breakpoint.lgAndUp) return sizes.lg
    }
  },
};
</script>

<style>
.slider-pagination-bullets {
  display: none;
}
</style>