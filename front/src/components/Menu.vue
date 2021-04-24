<template>
  <div class="wrapper">
    <div class="services">
      <a href="/blog">+ Halyk Blog</a>
      <a href="/nan">+ Halyk Start</a>
      <a href="/nan">+ Halyk Жаналык</a>
      <a href="/nan">+ Halyk Команда</a>
      <a href="/nan">+ Halyk Book</a>
      <a href="/nan">+ Halyk Сервисы</a>
      <a href="/nan">+ Обучение</a>
      <a href="/nan">+ Афиша</a>
    </div>
    <div class="number">
      Телефон доверия<br>
      8 (777)-777-77-77
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 280px
    height: 86vh
    background-color: white
    font-family: 'Roboto', sans-serif
    font-size: 2.5vh
    display: flex
    flex-direction: column
    align-items: center
    .services
      margin-top: 3vh
      width: 80%
      height: 55%
      display: flex
      flex-direction: column
      justify-content: space-around
      a
        text-decoration: none
        color: rgb(58, 58, 58)
      a:active
        color: rgb(58, 58, 58)
      a:hover
        color: rgb(161, 161, 161)
    .number
      margin-top: 2vh
      border: 1px solid grey
      border-radius: 6%
      width: 80%
      height: 15%
      display: flex
      align-items: center
      justify-content: center
  @media screen and (max-width: 500px)
    .wrapper
      display: none
</style>
