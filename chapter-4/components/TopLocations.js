import React, { Fragment, memo } from 'react';

function TopLocations({ locations }) {
  return (
    <Fragment>
      <h3>Top Locations</h3>
      <ul>
        {locations.map(location => (
          <li key={location.name}>{location.name}</li>
        ))}
      </ul>
    </Fragment>
  );
}

TopLocations.defaultProps = {
  locations: [{ name: 'Downtown' }, { name: 'North York' }]
};

export default memo(TopLocations);
