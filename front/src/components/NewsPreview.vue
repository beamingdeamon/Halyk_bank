<template>
  <div>
    <Header/>
    <div class="HomeBlock">
      <TiltCard v-for="(newsItem, i) in News" :key='i' :id='newsItem.id' />
    </div>
  </div>
</template>

<script>
import TiltCard from '../components/CardParalaxEffect'

export default {
  name: 'Home',
  components: {
    TiltCard
  },
  data(){
    return{
      News: null
    }
  }
}
</script>

<style scoped>
.HomeBlock {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
