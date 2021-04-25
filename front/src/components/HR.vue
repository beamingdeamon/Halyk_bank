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
        <div class="karier_item">nmnmnm</div>
        <div class="karier_item"></div>
        <div class="karier_item"></div>
        <div class="karier_item"></div>
        <div class="karier_item"></div>
        <div class="karier_item"></div>
      </div>

      <hr>
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
      <NewsPreview />
    </div>
  </div>
</template>

<script>
import NewsPreview from '../components/NewsPreview'
export default {
  name: 'HR',
  components:{
    NewsPreview
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
    min-height: 54vh
    margin-top: 2vh
    color: rgb(58, 58, 58)
    display: flex
    flex-direction: row
    justify-content: space-around
    @media (max-width: 912px)
      flex-direction: column
    .left_block
      width: 40%
      height: 100%
      background-color: white
      font-family: 'Roboto', sans-serif
      font-size: 2.5vh
      @media (max-width: 912px)
        width: 90%
        margin-left: 5%
      .karier
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        width: 100%
        margin-top: 1vh
        img
          width: 40px
          margin-right: 2vh
      .karier_block
        display: grid
        justify-items: center
        grid-template-columns: 1fr 1fr
        overflow-y: auto
        .karier_item
          margin-left: 1vh
          margin-top: 0.7vh
          border: 1px solid grey
          align-self: center
          width: 140px
          height: 75px
      .rising
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        width: 100%
        margin-top: 1vh
        img
          width: 40px
          margin-right: 2vh
      .rising_block
        margin-left: 2vh
        margin-bottom: 30px
        margin-top: 0.5vh
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
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
      @media (max-width: 912px)
        width: 90%
        margin-left: 5%
</style>
