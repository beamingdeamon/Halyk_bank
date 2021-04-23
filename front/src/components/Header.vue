<template>
  <div class="wrapper">
    <img src="../assets/header_logo.png" class="logo">
    <div class="left_side">
      <div class="search_icon_box">
        <img src="../assets/search_icon.svg" class="search_icon" />
      </div>
      <div class="notification_icon_box">
        <img src="../assets/notification_icon.png" class="notification_icon"/>
      </div>
      <div class="mail_icon_box">
        <img src="../assets/mail_icon.png" class="mail_icon" />
      </div>
      <div v-if="userName != ''" class="profile_block">
        <!-- <img src="../assets/user_logo.jpg" class="user_logo"> -->
        <div class="text_block">Привет, {{userName}}!</div>
      </div>
      <div v-else class="profile_block">
        <router-link  to="/login">
          <div class="text_block">Вход</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    userName(){
      return this.$store.state.name
    }
  }
}
</script>

<style scoped lang="sass">
 .wrapper
   width: 100vw
   height: 10vh
   display: flex
   flex-direction: row
   align-items: center
   justify-content: center
   background-color: white
   font-family: 'Ubuntu', sans-serif
   .left_side
     display: flex
     flex-direction: row
     align-items: center
     margin-left: auto
     max-width: 200px
   .logo
     width: 130px
     height: 40%
     margin-left: 10px
   .search_icon_box
     width: 30px
     height: 100%
     display: flex
     align-items: center
     justify-content: center
     .search_icon
      width: 100%
      height: 60%
      cursor: pointer
   .notification_icon_box
     width: 30px
     height: 100%
     display: flex
     align-items: center
     justify-content: center
     margin-left: 5px
     .notification_icon
       width: 100%
       height: 60%
       cursor: pointer
   .mail_icon_box
     width: 30px
     height: 100%
     display: flex
     align-items: center
     justify-content: center
     margin: 0 15px 0 5px
     .mail_icon
      width: 100%
      height: 60%
      cursor: pointer
   .profile_block
     width: 110px
     margin: 0 5px 0 0
     height: 100%
     display: flex
     flex-direction: row
     justify-content: center
     align-items: center
     .user_logo
      width: 4vw
      height: 8vh
      border-radius: 3vw
     .text_block
       margin-left: 1.5vw
       text-align: center
     a
       text-decoration: none
       color: black
       font-weight: 600
       cursor: pointer
</style>
