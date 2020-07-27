import React from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFusioncharts from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import styles from './chart.module.scss'
ReactFusioncharts.fcRoot(FusionCharts, Charts, FusionTheme)

const Chart = () => {
  //TODO: make chart a dynamic component
  const dataSource = {
    chart: {
      caption: '',
      yaxisname: '',
      subcaption: '',
      legendposition: 'Right',
      drawanchors: '0',
      showvalues: '0',
      plottooltext: '<b>$dataValue</b> Orders in $label',
      palettecolors: '#0291ff',
      baseFontSize: '10',
      theme: 'fusion',
    },
    data: [
      {
        label: 'Jan',
        value: '8',
      },
      {
        label: 'Feb',
        value: '300',
      },
      {
        label: 'Mar',
        value: '200',
      },
      {
        label: 'Apr',
        value: '350',
      },
      {
        label: 'May',
        value: '120',
      },
      {
        label: 'Jun',
        value: '150',
      },
    ],
  }
  return (
    <ReactFusioncharts
      type="area2d"
      width="100%"
      className={styles.Chart}
      dataFormat="JSON"
      dataSource={dataSource}
    />
  )
}
export default Chart
