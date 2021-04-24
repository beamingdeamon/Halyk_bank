<template>
  <div class="wrapper">
    <div class="error_block">
      Этот сервис разработке<br><br>
      Он будет добавлен чуть позже
      <a href="/">Вернуться</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nan'
}
</script>

<style lang="sass" scoped>
  .wrapper
    background-color: rgb(228,228,228)
    display: flex
    align-items: center
    justify-content: center
    height: 100vh
    .error_block
      background-color: white
      width: 350px
      height: 200px
      text-align: center
      font-size: 3vh
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      a
        margin-top: 3vh
        border: 1px solid grey
        width: 150px
        height: 40px
        text-decoration: none
        color: rgb(58, 58, 58)
        border-radius: 6%
      a:active
        color: rgb(58, 58, 58)
      a:hover
        color: rgb(161, 161, 161)
        background-color: grey
</style>