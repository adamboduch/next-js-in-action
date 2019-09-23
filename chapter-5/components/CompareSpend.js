import React, { memo } from 'react';

function CompareSpend({ period, current, last }) {
  const color = current < last ? '#4caf50' : '#ff1744';
  const wording = current < last ? 'less' : 'more';
  const percentage =
    100 - Math.round((current < last ? current / last : last / current) * 100);

  return (
    <div>
      Spent so far in current period: <strong>${current}</strong>{' '}
      <small style={{ color }}>
        ({percentage}% {wording} than {period})
      </small>
    </div>
  );
}

CompareSpend.defaultProps = {
  period: 'June 2019',
  current: 104,
  last: 136
};

export default memo(CompareSpend);
