import React, { Fragment, memo } from 'react';

function TopCategories({ categories }) {
  return (
    <Fragment>
      <h3>Top Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category.name}>{category.name}</li>
        ))}
        <li>Food</li>
        <li>Misc</li>
      </ul>
    </Fragment>
  );
}

TopCategories.defaultProps = {
  categories: [{ name: 'Food' }, { name: 'Misc' }]
};

export default memo(TopCategories);
