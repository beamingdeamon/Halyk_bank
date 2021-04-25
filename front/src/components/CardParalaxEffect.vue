<template>
  <div class="home">
      <router-link :to='`/newsItem/${id}`' class="cardP" v-tilt>
        <div class="card-image"><img src="" alt="Фото новости"></div>
        <div class="card-text">
          <span class="date">4 days ago</span>
          <h2>{{newsTitle}}</h2>
          <p>
            {{newsTexts[0].substr(0, 20)}}...
          </p>
        </div>
        <div class="card-stats">
          <div class="stat">
            <div class="value">{{Math.random() * 10}}<sup>m</sup></div>
            <div class="type">read</div>
          </div>
          <div class="stat border">
            <div class="value">{{Math.random() * 10000}}</div>
            <div class="type">views</div>
          </div>
          <div class="stat">
            <div class="value">{{Math.random() * 100}}</div>
            <div class="type">comments</div>
          </div>
        </div>
      </router-link>
  </div>
</template>
<script>
export default {
  name: "Home",
  data(){
    return{
      newsTitle: '',
      newsTexts: ''
    }
  },
  beforeMount() {
    axios.get('/user', {
        params: {
            ID: this.id
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
  props:{
    id: Number
  }
};
</script>

<style>

a{
  text-decoration: none;
}
.cardP {
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 190px 220px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  font-family: roboto;
  text-align: center;
  cursor: pointer;
  margin: 30px;
  transition: 0.1s;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.card-image {
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-text {
  grid-area: text;
  margin: 25px;
  transform: translateZ(30px);
}
.card-text .date {
  color: rgb(255, 7, 110);
  font-size: 13px;
}
.card-text p {
  color: grey;
  font-size: 15px;
  font-weight: 300;
}
.card-text h2 {
  margin-top: 0px;
  font-size: 28px;
}
.card-stats {
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(255, 7, 110);
}
.card-stats .stat {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}
.card-stats .border {
  border-left: 1px solid rgb(172, 26, 87);
  border-right: 1px solid rgb(172, 26, 87);
}
.card-stats .value {
  font-size: 22px;
  font-weight: 500;
}
.card-stats .value sup {
  font-size: 12px;
}
.card-stats .type {
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
}

/*card2*/
.card-image.card2 {
  background: url("../assets/CardParalaxEffectAssets/img2.jpg");
  background-size: cover;
}
.card-text.card2 .date {
  color: rgb(255, 77, 7);
}
.card-stats.card2 .border {
  border-left: 1px solid rgb(185, 67, 20);
  border-right: 1px solid rgb(185, 67, 20);
}
.card-stats.card2 {
  background: rgb(255, 77, 7);
}
/*card3*/
.card-image.card3 {
  background: url("../assets/CardParalaxEffectAssets/img3.jpg");
  background-size: cover;
}
.card-text.card3 .date {
  color: rgb(0, 189, 63);
}
.card-stats.card3 .border {
  border-left: 1px solid rgb(14, 122, 50);
  border-right: 1px solid rgb(14, 122, 50);
}
.card-stats.card3 {
  background: rgb(0, 189, 63);
}
.js-tilt-glare {
  border-radius: 18px;
}
</style>