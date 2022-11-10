import React from 'react';
import Label from '../common/Label';
import Proptypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ setSearchQuery, value }) => {
  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={s.filter}>
      <Label htmlFor="searchQuery" text="Find contacts by name" />
      <input value={value} onChange={handleChange} />
    </div>
  );
};

Filter.propTypes = {
  value: Proptypes.string.isRequired,
  setSearchQuery: Proptypes.func.isRequired,
};

export default Filter;
