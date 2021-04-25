<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="left_block">
        Функции Админ панели:<br>
        <span>1. <router-link to='/addnews'>Добавить новость</router-link></span>
        <span>2. <router-link to="/addnews">Добавить вакансию</router-link></span>
        <span>3. <router-link to="/addnews">Повысить сотрудника</router-link></span>
        <span>4. <router-link to="/addnews">Отправить всем сотрудникам уведомление</router-link></span>
      </div>
      <div class="right_block"><registration /></div>
    </div>
  </div>
</template>

<script>
import registration from '../components/registration'
import Header from '../components/Header'
export default {
  name: 'AdminPanel',
  components:{
    registration,
    Header
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-around
    height: 85vh
    color: rgb(58, 58, 58)
    @media (max-width: 1000px)
      flex-direction: column
    .left_block
      text-align: center
      width: 49%
      height: 90%
      background-color: white
      font-size: 4vh
      display: flex
      flex-direction: column
      @media (max-width: 1000px)
        width: 90%
        margin-top: 40vh
      @media (max-width: 450px)
        width: 100%;
      a
        color: rgb(58, 58, 58)
        text-decoration: none
      span
        margin-top: 6vh
    .right_block
      width: 49%
      height: 90%
      background-color: white
      @media (max-width: 1000px)
        width: 80%
        margin-top: 20px
      @media (max-width: 450px)
        width: 100%
</style>
