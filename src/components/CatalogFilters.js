import React from 'react';

const CatalogFilters = () => {
  return (
    <section className="catalog-filters">
      <div className="filters-container">
        <select className="filter" name="price" id="price">
            <option value="" disabled selected>Select Price Order</option>
            <option value="none">None</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
        </select>
        <select className="filter" name="height" id="height">
            <option value="" disabled selected>Select Height Order</option>
            <option value="none">None</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
        </select>
        <select className="filter" name="material" id="material">
            <option value="" disabled selected>Select Material</option>
            <option value="none">None</option>
            <option value="wood">Wood</option>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
        </select>
      </div>
      <button className="apply-button">Apply</button>
    </section>
  );
};

export default CatalogFilters;
