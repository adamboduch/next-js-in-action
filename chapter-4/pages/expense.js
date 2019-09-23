import React, { Fragment } from 'react';
import Header from '../components/Header';
import SelectField from '../components/SelectField';
import TextField from '../components/TextField';

export default function Expense({ categories, merchants, locations }) {
  return (
    <Fragment>
      <Header text="New Expense" />
      <SelectField id="category" label="Category" options={categories} />
      <SelectField id="merchant" label="Merchant" options={merchants} />
      <SelectField id="location" label="Merchant" options={locations} />
      <TextField id="amount" label="Amount" />
      <button>Save Expense</button>
    </Fragment>
  );
}

Expense.defaultProps = {
  categories: [
    { name: 'Food' },
    { name: 'Clothing' },
    { name: 'Groceries' },
    { name: 'Electronics' }
  ],
  merchants: [{ name: 'Canteens & Shoe' }, { name: 'Clothing Wire' }],
  locations: [
    { name: 'Downtown' },
    { name: 'East York' },
    { name: 'Scarborough' }
  ]
};
