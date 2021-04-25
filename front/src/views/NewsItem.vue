<template>
    <div>
        <Header />
        <div class="wrapper">
            <div class="newsPhoto"><img src="../assets/newsPhoto.jpg" id="NewPhoto" alt=""></div>
            <h2 class="newsTitle">BREAKING NEWS!!!</h2>
            <div class="newsText" v-for="(item, id) in newsTexts.parse('!!')" :key='id'>
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import axios from 'axios'
export default {
  name: 'newsItem',
  data(){
      return {
          newsTitle: '',
          newsTexts: null
      }
  },
  beforeMount(){
    axios.get('/user', {
        params: {
            ID: this.$router.params.id
        }
    })
    .then(function (response) {
        console.log(response);
        this.newsTitle = response.data.newsTitle
        this.newsTexts = response.data.newsTexts
        var reader = new FileReader();
        var preview = document.getElementById('NewPhoto')
        reader.onloadend = function () {
            preview.src = reader.result;
        }
        reader.readAsDataURL(response.data.img);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });
  },
  components:{
      Header
  }
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    padding: 20px 50px 30px 50px;
}
.newsPhoto{
    width: 100%;
    height: 40vh;
    background-size: cover;
}
.newsPhoto img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.newsTitle{
    width: 100%;
    text-align: center;
    margin: 20px 0 10px 0;
}
.newsText{
    width: 100%;
    margin-top: 15px;
}
.newsText::first-letter{
    margin-left: 40px;
}
</style>
