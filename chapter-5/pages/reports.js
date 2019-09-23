import React, { Fragment } from 'react';
import PieChart from '../components/PieChart';
import Header from '../components/Header';

export default function Reports() {
  return (
    <Fragment>
      <Header text="Reports" />
      <h2>Location</h2>
      <PieChart
        data={[
          { title: 'Downtown', value: 32 },
          { title: 'East York', value: 50 },
          { title: 'North York', value: 28 }
        ]}
      />
      <h2>Merchant</h2>
      <PieChart
        data={[
          { title: 'Morsels', value: 28 },
          { title: 'Purest Food', value: 67 },
          { title: 'Apparel Hive', value: 300 }
        ]}
      />
      <h2>Category</h2>
      <PieChart
        data={[
          { title: 'Food', value: 212 },
          { title: 'Clothing', value: 120 },
          { title: 'Electronics', value: 200 }
        ]}
      />
    </Fragment>
  );
}
