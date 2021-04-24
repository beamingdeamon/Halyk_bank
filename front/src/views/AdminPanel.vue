<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="left_block">
        Функции Админ панели:<br>
        <span>1.<a href="/addnews">Добавить новость (максимум 3 могут быть)</a></span>
        <span>2.<a href="/addnews">Добавить вакансию</a></span>
        <span>3.<a href="/addnews">Повысить сотрудника</a></span>
        <span>4.<a href="/addnews">Отправить всем сотрудникам уведомление</a></span>
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
    .left_block
      width: 49%
      height: 90%
      background-color: white
      font-size: 4vh
      display: flex
      flex-direction: column
      a
        color: rgb(58, 58, 58)
      span
        margin-top: 6vh
    .right_block
      width: 49%
      height: 90%
      background-color: white
</style>
