import { Bar } from 'react-chartjs-2'
import Data from '../types/Data'
import { FC, useState, useEffect } from 'react'
import { COLOR, LOCALE } from '../constants'
import shade from '../utils/shade'
import styled from 'styled-components'
import countries from '../constants/countries'
import states from '../constants/states'
import getName from '../utils/getName'

interface Props {
  data: Data
  usa?: boolean
}
const BarChart: FC<Props> = ({ data, usa }) => {
  const [chartData, setChartData] = useState({})

  useEffect(() => {
    const sortedTopTen = Object.entries(data)
      .map(([code, value]) => ({
        label: usa ? getName(code, states) : getName(code, countries),
        value,
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10)

    setChartData({
      labels: sortedTopTen.map(item => item.label),
      datasets: [
        {
          label: '',
          backgroundColor: chartColors,
          hoverBackgroundColor: hoverChartColors,
          data: sortedTopTen.map(item => item.value),
        },
      ],
    })
  }, [])

  return (
    <BarWrapper>
      <Bar
        options={{
          legend: false,
          tooltips: {
            callbacks: {
              label: function(tooltipItem: any) {
                return tooltipItem.yLabel.toLocaleString(LOCALE)
              },
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function(value: number) {
                    return value.toLocaleString(LOCALE)
                  },
                },
              },
            ],
          },
        }}
        data={chartData}
      />
    </BarWrapper>
  )
}

const chartColors = COLOR.MAP_FILL.slice(1, 4)
  .reverse()
  .concat(new Array(7).fill('#FFE7A7'))

const hoverChartColors: string[] = []
for (const color of chartColors) {
  hoverChartColors.push(shade(color, -15))
}

const BarWrapper = styled.div`
  margin-top: 56px;
`

export default BarChart
