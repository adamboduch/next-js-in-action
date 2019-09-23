import React, { Fragment } from 'react';
import Header from '../components/Header';
import PeriodSelector from '../components/PeriodSelector';
import CompareSpend from '../components/CompareSpend';
import HistoricalList from '../components/HistoricalList';

export default function History({ locations, merchants, categories }) {
  return (
    <Fragment>
      <Header text="History" />
      <PeriodSelector />
      <CompareSpend />
      <HistoricalList name="Locations" period="June 2019" items={locations} />
      <HistoricalList name="Merchants" period="June 2019" items={merchants} />
      <HistoricalList name="Categories" period="June 2019" items={categories} />
    </Fragment>
  );
}

History.defaultProps = {
  locations: [
    { name: 'Downtown', current: 430, last: 398 },
    { name: 'East York', current: 309, last: 334 }
  ],
  merchants: [
    { name: 'Morsels', current: 94, last: 106 },
    { name: 'Purest Food', current: 43, last: 20 }
  ],
  categories: [
    { name: 'Food', current: 210, last: 230 },
    { name: 'Clothing', current: 409, last: 183 }
  ]
};
