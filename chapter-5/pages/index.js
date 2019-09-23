import React, { Fragment } from 'react';
import Header from '../components/Header';
import SpendingSummary from '../components/SpendingSummary';
import TopMerchants from '../components/TopMerchants';
import TopLocations from '../components/TopLocations';
import TopCategories from '../components/TopCategories';

export default function Home() {
  return (
    <Fragment>
      <Header text="Expendisure" />
      <section>
        <SpendingSummary />
        <TopMerchants />
        <TopLocations />
        <TopCategories />
      </section>
    </Fragment>
  );
}
