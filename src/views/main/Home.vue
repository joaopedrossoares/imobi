<template>
  <div class="home">
    <Hero />
    <Recents />
    <Advertise />
    <Indications />
  </div>
</template>

<script>
import Hero from '@/components/main/home/Hero'
import Recents from '@/components/main/home/Recents'
import Advertise from '@/components/main/home/Advertise'
import Indications from '@/components/main/home/Indications'

export default {
  name: 'Home',
  components: { 
    Hero,
    Recents,
    Advertise,
    Indications
  }
}
</script>
