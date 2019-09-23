import React, { Fragment, memo } from 'react';

function HistoricalList({ name, period, items }) {
  return (
    <Fragment>
      <h2>{name}</h2>
      <ul>
        {items.map(({ name, current, last }) => {
          const color = current < last ? '#4caf50' : '#ff1744';
          const wording = current < last ? 'less' : 'more';
          const difference = current < last ? last - current : current - last;

          return (
            <li key={name}>
              {name} <strong>${current}</strong>{' '}
              <small style={{ color }}>
                (${difference} {wording} than {period})
              </small>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default memo(HistoricalList);
