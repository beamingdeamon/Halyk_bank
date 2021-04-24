<template>
    <div>
        <div class="wrapper">
            <input ref='text1' @change="changePh" type="file" id="actual-btn" hidden accept=".png, .jpg, .jpeg"/>
            <label class="imgLabel" for="actual-btn">Выберите фото</label>
            <span id="file-chosen">Фото не выбрано</span>

            <input class="inputTitle" type="text" placeholder="Введите заголовок">
            <button id='btn' @click="par_add">Добавить абзац</button>
            <div id="paragraphs"></div>
            <button class="success" @click="successClick">Опубликовать</button>
            <a href="/adminPanel" class="go_away">Вернуться</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'newsItem',
  data(){
      return {
          newsTitle: '',
          image: null
      }
  },
  mounted(){
    const actualBtn = document.getElementById('actual-btn');

    const fileChosen = document.getElementById('file-chosen');

    actualBtn.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name
    })
  },
  methods:{
      par_add(){
          const par = document.getElementById('paragraphs')
          const input = document.createElement('textarea')
          input.style = 'margin: 5px 0 5px 0; width: 100%; height: 100px; font-size: 20px'
          par.append(input)
      },
      successClick(){
          if(this.image == null) return
            const axiosPars = []
            const paragraphs = document.querySelectorAll('textarea')
            for (var key in paragraphs) {
                if (paragraphs.hasOwnProperty(key)) {
                    axiosPars.push(paragraphs[key].value.trim())
                }
            }
            console.log(axiosPars);
            axios.post('/user', {
                title: this.title
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
      },
      changePh(){
        if (this.$refs.text1.files.length === null) this.image = null
        else {
            this.image = this.$refs.text1.files[0]
        }
      },
  }
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.imgLabel {
  background-color: rgb(15, 51, 34);
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}
.inputTitle{
    position: relative;
    width: 50%;
    min-width: 300px;
    height: 40px;
    border: none;
    margin: 15px 0 20px;
    background: transparent;
    outline: none;
    padding: 0 20px;
    font-size: 24px;
    letter-spacing: 1px;
    box-sizing: border-box;
    border-radius: 8px;
    color: #333;
    box-shadow: -4px -4px 10px rgba(255,255,255,1),
                inset 4px 4px 10px rgba(0,0,0,0.2);
}
.inputTitle::placeholder{
    letter-spacing: 2px;
}
#btn{
    position: relative;
    cursor: pointer;
    color: #fff;
    background: #333;
    font-size: 15px;
    display: inline-block;
    padding: 6px 10px;
    border-radius: 8px;
    outline: none;
    border: none;
}
.success{
    position: relative;
    cursor: pointer;
    color: #fff;
    background: rgb(54, 68, 49);
    font-size: 20px;
    display: inline-block;
    padding: 10px 15px;
    margin: 10px 0 10px 0;
    border-radius: 8px;
    outline: none;
    border: none;
}
#paragraphs{
    display: flex;
    width: 100%;
    flex-direction: column;
}
.go_away{
    text-align: center;
    width: 8vw;
    height: 4vh;
    font-size: 3.5vh;
    border: 1px solid grey;
    border-radius: 3vh;
    text-decoration: none;
    color: grey;
}
</style>
