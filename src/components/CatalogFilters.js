import React, { useState } from 'react';

const CatalogFilters = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    price: 'none',
    height: 'none',
    material: 'none',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  return (
    <section className="catalog-filters">
      <div className="filters-container">
        <select name="price" onChange={handleFilterChange}>
          <option value="none">Select Price Order</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <select name="height" onChange={handleFilterChange}>
          <option value="none">Select Height Order</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <select name="material" onChange={handleFilterChange}>
          <option value="none">Select Material</option>
          <option value="wood">Wood</option>
          <option value="plastic">Plastic</option>
          <option value="metal">Metal</option>
        </select>
      </div>
      <button className="apply-button" onClick={handleApplyFilters}>Apply</button>
    </section>
  );
};

export default CatalogFilters;
