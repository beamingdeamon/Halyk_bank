<template>
  <div class="Banner_wrapper">
    <div class="MainBanner">
    <!-- Swiper -->
      <div class="swiper-container">
          <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
          <div class="swiper-slide">Slide 10</div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css'

export default {
    name: 'Home',
    mounted(){
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
</script>

  <style>
    .Banner_wrapper{
      width: 97vw;
      background: #fff;
      height: 270px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .MainBanner {
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      padding: 0;
      width: 100%;
      height: 200px;
      margin-top: 50px;
    }

    .swiper-container {
      width: 500px;
      height: 200px;
    }
    @media (max-width: 500px) {
      .swiper-container{
        width: 300px;
      }
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: grey;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 500px
    }
    @media screen and (max-width: 500px) {
      .swiper-container{
        width: 300px;
      }
      .swiper-slide{
        width: 300px;
      }
      .Banner_wrapper{
        width: 350px;
      }
    }
  </style>