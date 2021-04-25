<template>
  <div class="wrapper">
    <div class="navigation2">
        <div class="apinion">
            <img src="../assets/apinion.png">Мнение
        </div>
        <div class="apinion_block">
            <div class="apinion_item">
                <img src="../assets/user_logo.jpg" class="logo">
                <div class="text">
                    <span class="name">Уакыпов Жандос</span><span class="date"> 2 месяца назад</span>
                    <div class="comment">очень полезная книга сам читаю</div>
                </div>
            </div>
            <div class="apinion_item">
                <img src="../assets/user_logo.jpg" class="logo">
                <div class="text">
                    <span class="name">Уакыпов Жандос</span><span class="date"> 2 месяца назад</span>
                    <div class="comment">очень полезная книга сам читаю</div>
                </div>
            </div>
            <div class="apinion_item">
                <img src="../assets/user_logo.jpg" class="logo">
                <div class="text">
                    <span class="name">Уакыпов Жандос</span><span class="date"> 2 месяца назад</span>
                    <div class="comment">очень полезная книга сам читаю</div>
                </div>
            </div>
        </div>
        <div class="birthday">
            <img src="../assets/birthday.png"> Туган Кунымен!!!!
        </div>
        <div class="birthday_block">
            <span>Нурсипова Алия, главный менеджер</span>
            <span>Нурсипова Алия, главный менеджер</span>
            <span>Нурсипова Алия, главный менеджер</span>
            <span>Нурсипова Алия, главный менеджер</span>
            <span>Нурсипова Алия, главный менеджер</span> <!-- У user есть post это дожность -->
        </div>
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
    color: white
    font-size: 2.5vh
    display: flex
    flex-direction: column
    align-items: center
    .navigation2
        .apinion
            display: flex
            flex-direction: row
            align-items: center
            color: white
            margin-left: 6vh
            font-size: 3vh
            img
                width: 40px
        .apinion_block
            margin-top: 4vh
            height: 35%
            .apinion_item
                height: 33%
                display: flex
                flex-direction: row
                .logo
                    width: 80px
                    height: 80px
                    border-radius: 50%
                .text
                    display: flex
                    flex-direction: column
                    .date
                        color: black
                        font-size: 1.8vh
                    .comment
                        font-size: 2vh
        .birthday
            display: flex
            flex-direction: row
            align-items: center
            color: white
            margin-left: 2vh
            font-size: 3vh
            img
                width: 40px
        .birthday_block
            height: 30vh
            display: flex
            flex-direction: column
            font-size: 2.2vh
            justify-content: space-around
            span
                margin-left: 1vh
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