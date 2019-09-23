import React from 'react';

export default function History() {
  return (
    <div>
      <h1>History</h1>
      <div>
        <label>
          Select a different period:{' '}
          <select>
            <option>Last Period</option>
            <option>June 2019</option>
            <option>May 2019</option>
            <option>April 2019</option>
          </select>
        </label>
      </div>
      <div>
        Spent so far in current period: <strong>$134</strong>{' '}
        <small style={{ color: '#4caf50' }}>7% less than last period</small>
      </div>
      <div>
        <h2>Locations</h2>
        <ul>
          <li>
            Downtown <strong>$430</strong>{' '}
            <small style={{ color: '#ff1744' }}>
              ($4 more than last period)
            </small>
          </li>
          <li>
            East York <strong>$320</strong>{' '}
            <small style={{ color: '#4caf50' }}>
              ($7 less than last period)
            </small>
          </li>
        </ul>
      </div>
      <div>
        <h2>Merchants</h2>
        <ul>
          <li>
            Morsels <strong>$94</strong>{' '}
            <small style={{ color: '#4caf50' }}>
              ($11 less than last period)
            </small>
          </li>
          <li>
            Purest Food <strong>$43</strong>{' '}
            <small style={{ color: '#ff1744' }}>
              ($5 more than last period)
            </small>
          </li>
        </ul>
      </div>
      <div>
        <h2>Categories</h2>
        <ul>
          <li>
            Food <strong>$234</strong>{' '}
            <small style={{ color: '#4caf50' }}>
              ($14 less than last period)
            </small>
          </li>
          <li>
            Clothing <strong>$409</strong>{' '}
            <small style={{ color: '#ff1744' }}>
              ($102 more than last period)
            </small>
          </li>
        </ul>
      </div>
    </div>
  );
}
