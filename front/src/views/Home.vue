<template>
  <div>
    <Header/>
    <div class="Main_block">
      <Menu />
      <div class="middle_block">
        <Banners />
        <div class="MainBox">
          <div class="line-chart">
              <div class="aspect-ratio">
                  <canvas id="chart"></canvas>
              </div>
          </div>
        </div>
        <HR />
      </div>
      <Right_block />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banners from '../components/Banners'
import Menu from '@/components/Menu.vue'
import Right_block from '@/components/Right_block.vue'
import HR from '@/components/HR.vue'
import Chart from 'chart.js'
export default {
  name: 'Home',
  components: {
    Header,
    Banners,
    Menu,
    Right_block,
    HR
  },
  mounted(){
    var chart = document.getElementById('chart').getContext('2d'),
        gradient = chart.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');


        var data  = {
            labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
            datasets: [{
                    label: 'Процент довольных клиентов',
                    backgroundColor: gradient,
                    pointBackgroundColor: 'white',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    borderWidth: 1,
                    borderColor: '#911215',
                    data: [50, 55, 45, 56, 62, 70]
            }]
        };


        var options = {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },
            scales: {
                x: [{
                    type: 'CategoryScale',
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.05)',
                        lineWidth: 1
                    }
                }],
                y: [{
                    type: 'CategoryScale',
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.08)',
                        lineWidth: 1
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: true
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                titleFontFamily: 'Open Sans',
                backgroundColor: 'rgba(0,0,0,0.3)',
                titleFontColor: 'white',
                caretSize: 5,
                cornerRadius: 2,
                xPadding: 10,
                yPadding: 10
            }
        };

        new Chart(chart, {
            type: 'line',
            options: options,
            data: data,
        });
  }
}
</script>

<style lang="sass" scoped>
  .Main_block
    display: flex
    flex-direction: row
    margin-top: 15px
    margin-left: 10px
    margin-right: 10px
    justify-content: space-around
    .middle_block
      min-height: 86vh
      display: flex
      flex-wrap: wrap
      flex-direction: row
      HR
        width: 40%
      NewsPreview
        width: 40%
</style>


<style scoped>

.MainBox{
    display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 100%;
}

.line-chart {
  -webkit-animation: fadeIn 600ms cubic-bezier(0.57, 0.25, 0.65, 1) 1 forwards;
          animation: fadeIn 600ms cubic-bezier(0.57, 0.25, 0.65, 1) 1 forwards;
  opacity: 0;
  max-width: 640px;
  width: 60%;
  min-width: 360px;
}

.aspect-ratio {
  height: 0;
  padding-bottom: 50%;
}

@-webkit-keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
