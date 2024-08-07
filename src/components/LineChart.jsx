import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [12, 11, 14, 18, 17, 13, 13];
const pData = [28, 29, 33, 36, 32, 32, 33];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={1200}
      height={600}
      series={[
        { data: pData, label: 'High' },
        { data: uData, label: 'Low' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}