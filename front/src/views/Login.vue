<template>
  <div class="wrapper">
    <div class="login_block">
      <img src="../assets/header_logo.png" class="logo">
      <div class="second_part">
        <div class="enter_login">
          Введите Логин
          <input v-model="login" type="text" class="login"/>
        </div>

        <div class="enter_password">
          Введите Пароль
          <input v-model="password" type="password" class="password"/>
        </div>

        <button class="auth">Вход</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: 'Login',
  data(){
    return{
      login: '',
      password: ''
    }
  },
  mounted(){
    this.login_button_activate()
  },
  methods:{
    login_button_activate(){
      const auth = document.querySelector('.auth')
      auth.addEventListener('click',() => {
        if(this.password.trim().length > 0 && this.login.trim().length > 0){
          axios.post('/API', {
            login: 'LOGIN',
            password: 'PASSWORD'
          })
          .then(function (response) {
            if(response.data.success == true){
              Swal.fire(
                'Success!',
                'Успех!',
                'Вы вошли в свой аккаунт'
              )
              this.$store.commit('login', response.data.name)
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
                text: 'Такого пользователя не существует!',
              })
            }
          })
          .catch(function (error) {
            Swal.fire({
              icon: 'error',
              title: 'Ошибка!',
              text: 'Непредвиденная ошибка!',
            })
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Введите пароль и логин!',
          })
        }
      })
    }
  }
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
    .login_block
      position: fixed
      display: flex
      align-items: center
      flex-direction: column
      margin: auto
      height: 350px
      background-color: white
      .logo
        width: 120px
        height: 30px
        margin: 20px auto
      .second_part
        height: 350px
        width: 250px
        padding: 40px 0 60px 0
        display: flex
        align-itens: center
        flex-direction: column
        justify-content: center
        .enter_login
          width: 100%
          height: 70px
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          font-size: 1.3rem
          .login
            width: 65%
            height: 22px
            border-radius: 8px
            font-size: 1rem
            border: none
            outline: none
            background-color: rgb(228,228,228)
        .enter_password
          width: 100%
          height: 70px
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          font-size: 1.3rem
          .password
            width: 65%
            height: 22px
            border-radius: 8px
            font-size: 1rem
            border: none
            outline: none
            background-color: rgb(228,228,228)
        .auth
          width: 80%
          height: 30px
          margin: 6% auto
          border: none
          border-radius: 10px
          font-weight: 600
          background-color: #b7b7b7
          cursor: pointer
</style>
