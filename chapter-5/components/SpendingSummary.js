import React, { Fragment, memo } from 'react';

function SpendingSummary({ budget, spent, daysComplete, daysTotal }) {
  return (
    <Fragment>
      <h2>Spending Summary</h2>
      <div>
        Days Remaining: <strong>{daysTotal - daysComplete}</strong>
      </div>
      <div>
        <progress max={daysTotal} value={daysComplete} />
      </div>
      <div>
        Budget Remaining: <strong>${budget - spent}</strong>
      </div>
      <div>
        <progress max={budget} value={spent} />
      </div>
    </Fragment>
  );
}

SpendingSummary.defaultProps = {
  budget: 1000,
  spent: 291,
  daysComplete: 24,
  daysTotal: 30
};

export default memo(SpendingSummary);
