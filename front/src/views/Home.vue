<template>
  <div>
    <Header/>
    <Banners />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banners from '../components/Banners'

export default {
  name: 'Home',
  components: {
    Header,
    Banners
  }
}
</script>
