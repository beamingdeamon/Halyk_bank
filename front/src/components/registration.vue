<template>
  <div class="register_wrapper">
    <div class="title">Регистрация пользователя</div>
    <span>Введите Имя</span>
    <input v-model="name" type="text">
    <span>Введите Фамиллию</span>
    <input v-model="surname" type="text">
    <span>Введите ИИН</span>
    <input v-model="iin" type="number">
    <span>Введите телефон</span>
    <input v-model="tel" type="tel">
    <span>Введите пароль</span>
    <input v-model="pas" type="text">
    <button type="submit" @click="reg()">Зарегистрировать</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
  name: 'registration',
  data(){
    return{
      name: null,
      surname: null,
      iin: null,
      tel: null,
      pas: null
    }
  },
  methods:{
    reg(){
      if(this.name && this.surname && this.pas && this.tel && this.iin){
        axios.post('/API', {
            name: this.name,
            surname: this.surname,
            pas: this.pas,
            tel: this.tel,
            iin: this.iin
        })
          .then(function (response) {
            if(response.data.success == true){
              Swal.fire(
                'success',
                'Успех!',
                'Аккаунт создан!'
              )
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
                text: 'Аккаунт не создан по какой-то причине(',
              })
            }
          })
          .catch(function (error) {
            Swal.fire({
              icon: 'error',
              title: 'Ошибка!',
              text: 'Непредвиденная ошибка!',
            })
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ошибка!',
          text: 'Введите правильные данные!',
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .register_wrapper
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 20px
    .title
      margin-top: 4vh
      margin-bottom: 6vh
      font-size: 4vh
      height: 3vh
    span
      margin-top: 3vh
    button
      margin-top: 2vh
      margin-bottom: 2vh
</style>
