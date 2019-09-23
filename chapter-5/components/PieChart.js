import React, { memo } from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

function colorize(data) {
  const colors = ['#e91e63', '#2196f3', '#4caf50'];

  return data.map((v, i) => ({ ...v, color: colors[i] }));
}

function PieChart({ data }) {
  return (
    <ReactMinimalPieChart
      data={colorize(data)}
      style={{ width: 250, height: 250, margin: 10 }}
      label={({ data, dataIndex }) =>
        `${data[dataIndex].title} ${Math.round(data[dataIndex].percentage)}%`
      }
      labelStyle={{
        fontSize: '4px',
        fontFamily: 'sans-serif',
        fill: '#ffffff'
      }}
    />
  );
}

export default memo(PieChart);
