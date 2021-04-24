<template>
  <div class="register_wrapper">
    <div class="title">Регистрация</div>
    <span>Введите Логин</span>
    <input type="text">
    <span>Введите Фамилию</span>
    <input type="text">
    <span>Введите Имя</span>
    <input type="text">
    <span>Введите Дату рождения</span>
    <input type="text">
    <span>Введите Должность</span>
    <input type="text">
    <span>Введите Пароль</span>
    <input type="text">
    <button type="submit">Регистрировать</button>
    <!-- Тут логику напиши, на беке уже есть регистрация, если что к димашу обращайся -->
  </div>
</template>

<script>
export default {
  name: 'registration'
}
</script>

<style lang="sass" scoped>
  .register_wrapper
    display: flex
    flex-direction: column
    align-items: center
    .title
      margin-top: 4vh
      margin-bottom: 6vh
      font-size: 4vh
      height: 3vh
    span
      margin-top: 3vh
    button
      margin-top: 2vh
</style>
