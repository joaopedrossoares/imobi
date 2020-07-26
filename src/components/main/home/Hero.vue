<template>
  <div id="main-home-hero" :style="{backgroundColor: $vuetify.theme.themes.light.bb1}">
    <v-container class="text-center py-8 py-sm-16">
      <h2 class="text-h4 text-sm-h3 font-weight-bold mb-5">Alugue seu imóvel</h2>
      <span class="text-subtitle2 text-sm-h6 font-weight-regular">Aproveite a facilidade e praticidade de alugar seu imóvel com a Deltalar imóveis</span>
      <v-card class="pa-6 mt-10" elevation="4">
        <span >Alugar</span>
        <v-form>
          <v-row>
            <v-col cols="12">
              <v-autocomplete validate-on-blur v-model="search.city" prepend-icon="mdi-map-marker" label="Cidade" placeholder="Busque por cidade"/>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete validate-on-blur v-model="search.district" label="Bairro" prepend-icon="mdi-map-marker" placeholder="Busque por bairro"/>
            </v-col>
            <v-col cols="12" sm="3">
              <v-select :items="selectOptions.rent" item-value="value" item-text="label" validate-on-blur v-model="search.rent" label="Aluguel até" prepend-icon="mdi-currency-usd" placeholder="Escolha o valor"/>
            </v-col>
            <v-col cols="12" sm="3">
              <v-select :items="selectOptions.rooms" validate-on-blur v-model="search.rooms" label="Quartos" prepend-icon="mdi-bed" placeholder="Nº de quartos"/>
            </v-col>
          </v-row>
          <div class="d-flex justify-center mt-10">
            <v-btn :to="{ name: 'MainSearch', query:  search  }" dark :style="{backgroundImage: 'linear-gradient(to bottom , #C32F32, #D94C7B)'}" :width="$vuetify.breakpoint.xs ? '100%' : '380'" >
              BUSCAR IMÓVEIS
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: {},
    selectOptions: {
      rent: [
        {
          label: 'R$ 1.000',
          value: 1000
        },
        {
          label: 'R$ 2.000',
          value: 2000
        },
        {
          label: 'R$ 3.000',
          value: 3000
        },
        {
          label: 'R$ 4.000',
          value: 4000
        },
        {
          label: 'R$ 5.000',
          value: 5000
        },
        {
          label: 'R$ 10.000',
          value: 10000
        },
        {
          label: 'R$ 20.000',
          value: 20000
        },
      ],
      rooms: ['1', '2', '3', '4', '5+']
    }
  })
};
</script>

<style>
</style>