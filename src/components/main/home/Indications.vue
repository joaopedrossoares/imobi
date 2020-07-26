<template>
  <div id="main-home-indications" :style="{backgroundColor: $vuetify.theme.themes.light.bb2}">
    <v-container class="py-8 py-sm-16">
      <div class="mb-10">
        <h3 class="text-h5 text-sm-h4 font-weight-bold mb-n2">Faça indições</h3>
        <img src="../../../assets/img/ornament.svg" />
      </div>
      <div>
        <v-row>
          <v-col cols="12" sm="6" class="d-flex align-center">
            <div class="text-h6">
              <span class="d-block grey--text text--darken-1 font-weight-medium">Conhece alguém que tem um imóvel para alugar?</span>
              <span class="d-block my-4 font-weight-bold">Indique e ganhe R$100!</span>
              <p class="font-weight-regular">Ganhe dinheiro com o Indica Aí, o programa de indicações de imóveis do QuintoAndar. Você ganha R$100 se o proprietário anunciar. Depois, ganhe mais 10% do primeiro aluguel quando o imóvel for alugado.</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div>
              <v-img contain width="400" src="../../../assets/img/transfer.svg" />
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="d-flex justify-center mt-10">
        <v-btn
          :to="{name: 'MainIndicate'}"
          dark
          outlined
          color="bp"
          :width="$vuetify.breakpoint.xs ? '100%' : '380'"
        >INDICAR IMÓVEL</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>