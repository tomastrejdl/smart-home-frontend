<template>
  <div v-if="detail">
    <canvas id="temperatureChart" width="400" height="400"></canvas>
  </div>
  <div v-else class="w-full flex">
    <ion-icon name="thermometer-outline" class="text-6xl"></ion-icon>
    <div class="flex flex-col flex-grow-1">
      <span>{{ attachment.name }}</span>
      <span
        >{{ attachment.characteristics.temperature.value }}
        {{
          attachment.characteristics.temperature.units == 'celsius' && 'ºC'
        }}</span
      >
      <span>{{ attachment.characteristics.humidity.value }}%</span>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

/**
 * Temperature sensor component
 * @prop {boolean} detail If true, displays a temperature graph, otherwise just temperature and humidity values
 */
export default {
  props: {
    attachment: { type: Object, required: true },
    detail: { type: Boolean, default: false }
  },
  mounted() {
    if (this.detail) {
      var ctx = document.getElementById('temperatureChart').getContext('2d')
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      })
    }
  }
}
</script>

<style scoped></style>
