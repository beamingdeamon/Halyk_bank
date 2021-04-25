<template>
  <div class="wrapper">
    <div class="navigation">
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
            <div class="toggle" @click="toggleMenu">
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
        toggleMenu(){
            let nav = document.querySelector('.navigation')
            let toggle = document.querySelector('.toggle')
            nav.classList.toggle('active')
            toggle.classList.toggle('active')
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
.navigation{
    position: fixed;
    width: 0;
    height: 100%;
    background: #10ad6c;
    left: 0;
    top: calc(10vh + 75px);
    overflow: hidden;
    transition: 0.5s;
    z-index: 100;
}
.navigation.active,
.navigation:hover{
    width: 300px;
}
.navigation ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.navigation ul li{
    position: relative;
    width: 100%;
    list-style: none;
}
.navigation ul li:hover{
    background: #086828;
}
.navigation ul li a{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: #fff;
}
.navigation ul li a .icon .fa{
    font-size: 24px;
}
.navigation ul li a{
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
.navigation ul li a div{
    position: relative;
    display: block;
}
.toggle{
    position: absolute;
    right: 0;
    width: 60px;
    height: 60px;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 10px;
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
.toggle svg{
    position: absolute;
    width: 30px;
    height: 30px;
    color: white;
}
.toggle.active,
.toggle:hover{
    background: #086828;
}
.toggle.active,
.toggle:hover > svg{
    background: #086828;
}
.toggle.active > .mainT{
    display: none;
}
.toggle.active > .pasT{
    display: block;
}
@media (max-width: 600px){
    .navigation{
        left: -60px;
    }
    .navigation.active{
        left: 0;
        width: 100%;
    }
}
</style>