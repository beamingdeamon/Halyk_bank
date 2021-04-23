<template>
  <div class="wrapper">
    <div class="login_block">
      <img src="../assets/header_logo.png" class="logo">
      <div class="enter_login">
        Введите Логин
        <input type="text" class="login"/>
      </div>
      <div class="enter_password">
        Введите Пароль
        <input type="password" class="password"/>
      </div>
      <button class="auth">Вход</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="sass" scoped>
  .wrapper
    display: flex
    justify-content: center
    align-items: center
    width: 100vw
    height: 100vh
    background-color: rgb(228,228,228)
    font-family: 'Ubuntu', sans-serif
    font-size: 3vh
    .login_block
      width: 25%
      height: 43%
      background-color: white
      .logo
        margin-left: 2vw
        margin-top: 1vh
      .enter_login
        width: 100%
        height: 30%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        .login
          width: 65%
          height: 20%
          font-size: 2.5vh
          border: none
          background-color: rgb(228,228,228)
      .enter_password
        width: 100%
        height: 30%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        .password
          width: 65%
          height: 20%
          font-size: 2.5vh
          border: none
          background-color: rgb(228,228,228)
      .auth
        width: 4vw
        height: 5vh
        float: right
        margin-top: 4vh
        margin-right: 2vw
</style>
