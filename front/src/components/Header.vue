<template>
  <div class="wrapper">
    <img src="../assets/header_logo.png" class="logo">
    <div class="search_box">
      <input type="text" class="input_box" />
    </div>
    <div class="search_icon_box">
      <img src="../assets/search_icon.svg" class="search_icon" />
    </div>
    <div class="notification_icon_box">
      <img src="../assets/notification_icon.png" class="notification_icon"/>
    </div>
    <div class="mail_icon_box">
      <img src="../assets/mail_icon.png" class="mail_icon" />
    </div>
    <div class="profile_block">
      <img src="../assets/user_logo.jpg" class="user_logo">
      <div class="text_block">Привет name !</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="sass">
 .wrapper
   width: 100vw
   height: 10vh
   display: flex
   flex-direction: row
   align-items: center
   background-color: white
   font-family: 'Ubuntu', sans-serif
   .logo
     width: 7vw
     height: 40%
     margin-left: 2.5vw
   .search_box
     width: 55%
     height: 90%
     margin-left: 6vw
     display: flex
     justify-content: center
     align-items: center
     .input_box
       width: 95%
       height: 80%
       border: none
   .search_icon_box
     width: 4vw
     height: 7vh
     display: flex
     align-items: center
     justify-content: center
     .search_icon
      width: 2.5vw
      height: 5vh
   .notification_icon_box
     width: 4vw
     height: 7vh
     display: flex
     align-items: center
     justify-content: center
     .notification_icon
       width: 2.5vw
       height: 5vh
   .mail_icon_box
     width: 4vw
     height: 7vh
     display: flex
     align-items: center
     justify-content: center
     .mail_icon
      width: 2.5vw
      height: 5vh
   .profile_block
     width: 17%
     height: 80%
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
</style>
