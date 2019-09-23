import React, { memo } from 'react';

function PeriodSelector({ periods }) {
  return (
    <div>
      <label htmlFor="period">Select a different period: </label>
      <select id="period">
        {periods.map(period => (
          <option key={period.name}>{period.name}</option>
        ))}
      </select>
    </div>
  );
}

PeriodSelector.defaultProps = {
  periods: [
    { name: 'Last Period' },
    { name: 'June 2019' },
    { name: 'May 2019' },
    { name: 'April 2019' }
  ]
};

export default memo(PeriodSelector);
