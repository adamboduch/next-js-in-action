import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

export default function Reports() {
  return (
    <div>
      <h1>Reports</h1>
      <h2>Location</h2>
      <ReactMinimalPieChart
        style={{ width: 250, height: 250, margin: 10 }}
        data={[
          { title: 'Downtown', value: 32, color: '#e91e63' },
          { title: 'East York', value: 50, color: '#2196f3' },
          { title: 'North York', value: 28, color: '#4caf50' }
        ]}
        label={({ data, dataIndex }) =>
          `${data[dataIndex].title} ${Math.round(data[dataIndex].percentage)}%`
        }
        labelStyle={{
          fontSize: '4px',
          fontFamily: 'sans-serif',
          fill: '#ffffff'
        }}
      />
      <h2>Merchant</h2>
      <ReactMinimalPieChart
        style={{ width: 250, height: 250, margin: 10 }}
        data={[
          { title: 'Morsels', value: 28, color: '#e91e63' },
          { title: 'Purest Food', value: 67, color: '#2196f3' },
          { title: 'Apparel Hive', value: 300, color: '#4caf50' }
        ]}
        label={({ data, dataIndex }) =>
          `${data[dataIndex].title} ${Math.round(data[dataIndex].percentage)}%`
        }
        labelStyle={{
          fontSize: '4px',
          fontFamily: 'sans-serif',
          fill: '#ffffff'
        }}
      />
      <h2>Category</h2>
      <ReactMinimalPieChart
        style={{ width: 250, height: 250, margin: 10 }}
        data={[
          { title: 'Food', value: 212, color: '#e91e63' },
          { title: 'Clothing', value: 120, color: '#2196f3' },
          { title: 'Electronics', value: 200, color: '#4caf50' }
        ]}
        label={({ data, dataIndex }) =>
          `${data[dataIndex].title} ${Math.round(data[dataIndex].percentage)}%`
        }
        labelStyle={{
          fontSize: '4px',
          fontFamily: 'sans-serif',
          fill: '#ffffff'
        }}
      />
    </div>
  );
}
