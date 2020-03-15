<template>
  <div v-if="detail" class="p-4">
    <div class="w-full flex justify-center m-2">
      <ion-icon name="thermometer-outline" class="text-6xl"></ion-icon>
      <div class="flex flex-col flex-grow-1">
        <span>Room: {{ attachment.room.name }}</span>
        <span
          >Temperature: {{ attachment.characteristics.temperature.value }}
          {{
            attachment.characteristics.temperature.units == 'celsius' && 'ºC'
          }}</span
        >
        <span>Humidity: {{ attachment.characteristics.humidity.value }}%</span>
      </div>
    </div>
    <div id="plot" class="w-full h-full"></div>
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
import Plotly from 'plotly.js-dist'
import { mapGetters } from 'vuex'

/**
 * Temperature sensor component
 * @prop {boolean} detail If true, displays a temperature graph, otherwise just temperature and humidity values
 */
export default {
  props: {
    attachment: { type: Object, required: true },
    detail: { type: Boolean, default: false }
  },
  data: () => ({
    temperatureData: []
  }),
  computed: {
    ...mapGetters('app', ['getApiUrl']),
    ...mapGetters('attachments', ['getAtachmentRoom'])
  },
  async mounted() {
    if (this.detail) {
      this.temperatureData = (
        await this.axios.get(
          this.getApiUrl('attachments/' + this.$route.params.attachmentId) +
            '/getTemperatureData'
        )
      ).data

      if (this.temperatureData == 'NO DATA') return

      const labels = this.temperatureData.values.map(value => value.timestamp)
      const tempData = this.temperatureData.values.map(
        value => value.temperature
      )
      const humidityData = this.temperatureData.values.map(
        value => value.humidity
      )

      const temperature = {
        x: labels,
        y: tempData,
        fill: 'tozeroy',
        type: 'scatter',
        mode: 'lines',
        line: { shape: 'linear', color: 'orange' }
      }

      const humidity = {
        x: labels,
        y: humidityData,
        type: 'scatter',
        mode: 'lines',
        yaxis: 'y2',
        line: { shape: 'linear', color: 'royalblue' }
      }

      const layout = {
        yaxis: {
          title: 'Temperature',
          titlefont: { color: 'darkorange' },
          tickfont: { color: 'darkorange' }
        },
        yaxis2: {
          title: 'Humidity',
          titlefont: { color: 'royalblue' },
          tickfont: { color: 'royalblue' },
          overlaying: 'y',
          side: 'right'
        },
        showlegend: false
      }

      Plotly.newPlot('plot', [temperature, humidity], layout, {
        staticPlot: true
      })
    }
  }
}
</script>

<style scoped></style>
