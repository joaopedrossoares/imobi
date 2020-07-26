<template>
  <v-dialog :width="$vuetify.breakpoint.xs ? '100%' : '50%'" v-model="dialog.isActive">
    <v-card class="pa-0 pa-sm-8">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">1</v-stepper-step>
          <v-divider />
          <v-stepper-step :complete="e1 > 2" step="2">2</v-stepper-step>
          <v-divider />
          <v-stepper-step :complete="e1 > 3" step="3">3</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items >
          <v-stepper-content step="1">
            <div class="text-center">
              <h4 class="text-h5 font-weight-bold mb-6">Acesse ou crie sua conta</h4>
              <span>Digite seu celular para entrar. Seus dados estão seguros e você não precisa de senha.</span>
            </div>
            <div class="d-flex justify-center mt-4">
              <v-sheet  class="d-flex justify-center">
                <v-row>
                  <v-col cols="4">
                    <v-text-field outlined placeholder="(31)" label="DDD" />
                  </v-col>
                  <v-col cols="8">
                    <v-text-field outlined placeholder="1111 - 1111" label="Celular" />
                  </v-col>
                </v-row>
              </v-sheet>
            </div>
            <div class="d-flex justify-center">
              <span
                class="caption grey--text"
              >Você vai receber um código para confirmar seu telefone</span>
            </div>
            <div>
              <div class="d-flex flex-column align-center mt-10">
                <v-btn
                  class="mb-4"
                  dark
                  :style="{backgroundImage: 'linear-gradient(to bottom , #C32F32, #D94C7B)'}"
                  :width="$vuetify.breakpoint.xs ? '100%' : '380'"
                >ENVIAR POR SMS</v-btn>
                <v-btn
                  dark
                  outlined
                  color="bp"
                  :width="$vuetify.breakpoint.xs ? '100%' : '380'"
                >ENVIAR POR WHATSAPP</v-btn>
              </div>
            </div>
          </v-stepper-content>
        </v-stepper-items>
        <div class="d-flex justify-center mt-16">
          <v-sheet class="text-center" width="360">
            <span>Ao continuar você concorda com os Termos de Uso e Política de Privacidade</span>
          </v-sheet>
        </div>
      </v-stepper>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Object
  },
  data: () => ({
    e1: 1,
  }),
};
</script>

<style>
</style>