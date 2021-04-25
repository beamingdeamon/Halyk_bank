<template>
  <div class="wrapper">
    <div class="navigation2">
                <ul>
                    <li>
                        <a href="/blog">+ Halyk Blog</a>
                    </li>
                    <li>
                        <a href="/nan">+ Halyk Start</a>
                    </li>
                    <li>
                        <a href="/nan">+ Halyk Жаналык</a>
                    </li>
                    <li>
                        <a href="/nan">+ Halyk Book</a>
                    </li>
                    <li>
                        <a href="/nan">+ Halyk Сервисы</a>
                    </li>
                    <li>
                      <a href="/nan">+ Обучение</a>
                    </li>
                    <li>
                      <a href="/nan">+ Афиша</a>
                    </li>
                    <li>
                      <div class="number">
                        Телефон доверия<br>
                        8 (777)-777-77-77
                      </div>
                    </li>
                </ul>
            </div>
            <div class="toggle2" @click="toggle2Menu">
                <v-icon class = 'mainT' style="color: black" name="menu"></v-icon>
                <v-icon class = 'pasT' style="color: black" name="x"></v-icon>
            </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',    mounted(){
    },
    methods:{
        toggle2Menu(){
            let nav = document.querySelector('.navigation2')
            let toggle2 = document.querySelector('.toggle2')
            nav.classList.toggle('active')
            toggle2.classList.toggle('active')
        }
    }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 280px
    min-height: 86vh
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
      width: 90%
      margin-left: 5%
      height: 60px;
      display: flex
      align-items: center
      justify-content: center
      color: white
      white-space: nowrap
</style>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navigation2{
    position: fixed;
    width: 0;
    height: 100%;
    background: #10ad6c;
    right: 0;
    top: calc(10vh + 75px);
    overflow: hidden;
    transition: 0.5s;
    z-index: 100;
}
.navigation2.active,
.navigation2:hover{
    width: 300px;
}
.navigation2 ul{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
}
.navigation2 ul li{
    position: relative;
    width: 100%;
    list-style: none;
}
.navigation2 ul li:hover{
    background: #086828;
}
.navigation2 ul li a{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: #fff;
}
.navigation2 ul li a .icon .fa{
    font-size: 24px;
}
.navigation2 ul li a{
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    font-size: 17px;
    color: white;
    text-align: start;
    white-space: nowrap;
}
.navigation2 ul li a div{
    position: relative;
    display: block;
}
.toggle2{
    position: absolute;
    right: 0;
    width: 60px;
    height: 60px;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 10px;
    z-index: 101;
}
.pasT{
    z-index: 0;
    background: #086828;
}
.mainT{
    z-index: 1;
    background: white;
}
.toggle2 svg{
    position: absolute;
    width: 30px;
    height: 30px;
    color: white;
}
.toggle2.active,
.toggle2:hover{
    background: #086828;
}
.toggle2.active,
.toggle2:hover > svg{
    background: #086828;
}
.toggle2.active > .mainT{
    display: none;
}
.toggle2.active > .pasT{
    display: block;
}
@media (max-width: 600px){
    .navigation2{
        right: -60px;
    }
    .navigation2.active{
        right: 0;
        width: 100%;
    }
}
</style>