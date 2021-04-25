<template>
  <div>
    <Header/>
    <div class="Main_block">
      <Menu />
      <div class="middle_block">
        <Banners />
        <!-- Это блок отвечающий за все, что ниже банеров. Тут и халык жол и новости ! -->
        <HR />
      </div>
      <Right_block />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banners from '../components/Banners'
import Menu from '@/components/Menu.vue'
import Right_block from '@/components/Right_block.vue'
import HR from '@/components/HR.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Banners,
    Menu,
    Right_block,
    HR
  }
}
</script>

<style lang="sass" scoped>
  .Main_block
    display: flex
    flex-direction: row
    margin-top: 15px
    margin-left: 10px
    margin-right: 10px
    justify-content: space-around
    .middle_block
      min-height: 86vh
      display: flex
      flex-wrap: wrap
      flex-direction: row
      HR
        width: 40%
      NewsPreview
        width: 40%
</style>
