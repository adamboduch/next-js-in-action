import React, { Fragment, memo } from 'react';

function TopMerchants({ merchants }) {
  return (
    <Fragment>
      <h3>Top Merchants</h3>
      <ul>
        {merchants.map(merchant => (
          <li key={merchant.name}>
            {merchant.name} (<strong>${merchant.amount}</strong>)
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

TopMerchants.defaultProps = {
  merchants: [
    { name: 'Morsels', amount: 211 },
    { name: 'Purest Food', amount: 91 },
    { name: 'Apparel Hive', amount: 304 }
  ]
};

export default memo(TopMerchants);
