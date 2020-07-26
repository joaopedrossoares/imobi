<template>
  <div id="main">
    <Nav />
    <router-view />
    <ButtonUp />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/layout/main/Nav.vue'
import Footer from '@/layout/main/Footer.vue'
import ButtonUp from '@/layout/main/UpButton.vue'

export default {
  components: {
    Nav,
    Footer,
    ButtonUp
  }
}
</script>

<style>

</style>