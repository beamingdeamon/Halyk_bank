<template>
  <div class="wrapper">
    <div class="left_block">
      <!-- блок названия халык Карьера -->
      <div class="karier">
        <img src="../assets/working.png">
        Halyk Карьера
      </div>
      <!-- блок с вакансиями. Логику потом напишем после бека, еще я заебался поэтому не буду внутри расписывать -->
      <div class="karier_block">
        <div class="karier_item"></div>
        <div class="karier_item"></div>
        <div class="karier_item"></div>
        <div class="karier_item"></div>
        <div class="karier_item"></div>
        <div class="karier_item"></div>
      </div>
      <!-- Это блок с повышениями -->
      <div class="rising">
        <img src="../assets/rising.png">
        Halyk Жол
      </div>
      <!-- Тут на логике нужно реализовать, чтобы из повышений выводились только 5 последних -->
      <div class="rising_block">
        <span>Нурсипова Алия, главный менеджер</span>
        <span>Нурсипова Алия, главный менеджер</span>
        <span>Нурсипова Алия, главный менеджер</span>
        <span>Нурсипова Алия, главный менеджер</span>
        <span>Нурсипова Алия, главный менеджер</span>
      </div>

    </div>

    <!-- Блок новостей! -->
    <div class="right_block">
      <!-- я сделал уже чтобы они стояли заябись, ты только блокам задай width: 100% и по кайфу и высоту подбери. Еще по логике нужно сделать, чтобы только 3 выходили -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HR'
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
    height: 54vh
    margin-top: 2vh
    color: rgb(58, 58, 58)
    display: flex
    flex-direction: row
    justify-content: space-around
    .left_block
      width: 40%
      height: 100%
      background-color: white
      font-family: 'Roboto', sans-serif
      font-size: 2.5vh
      .karier
        display: flex
        flex-direction: row
        align-items: center
        width: 60%
        margin-left: 5vh
        margin-top: 1vh
        img
          width: 40px
          margin-right: 2vh
      .karier_block
        height: 41.5%
        display: grid
        grid-template-columns: 1fr 1fr
        overflow-y: scroll
        .karier_item
          margin-left: 1vh
          margin-top: 0.7vh
          border: 1px solid grey
          width: 140px
          height: 75px
      .rising
        display: flex
        flex-direction: row
        align-items: center
        width: 60%
        margin-left: 5vh
        margin-top: 1vh
        img
          width: 40px
          margin-right: 2vh
      .rising_block
        margin-left: 2vh
        margin-top: 0.5vh
        height: 32%
        display: flex
        flex-direction: column
        span
          margin-top: 0.7vh
          font-size: 2.2vh
          color: rgb(58, 58, 58)
    .right_block
      background-color: white
      width: 58%
      height: 100%
      display: flex
      flex-direction: column
</style>
