
import React, { useState, useMemo } from 'react';
import { benefits } from '../data/benefits';
import Card from '../components/Card';

/**
 * The Benefits Finder page.
 * Helps users discover tax benefits and incentives based on their profile.
 */
const Benefits: React.FC = () => {
  const [filters, setFilters] = useState({
    isSelfEmployed: false,
    isBusinessRegistered: false,
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const filteredBenefits = useMemo(() => {
    return benefits.filter(benefit => {
      // If no filters are active, show all benefits
      if (!filters.isSelfEmployed && !filters.isBusinessRegistered) {
        return true;
      }
      // Match benefits based on active filters
      let match = true;
      if (filters.isSelfEmployed && !benefit.criteria.isSelfEmployed) {
        match = false;
      }
      if (filters.isBusinessRegistered && !benefit.criteria.isBusinessRegistered) {
        match = false;
      }
      return match;
    });
  }, [filters]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Benefits</h1>
      <p className="text-gray-600 mb-6">Select the options that apply to you to find relevant incentives.</p>

      {/* Filter Controls */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <span className="font-semibold text-gray-700">I am:</span>
          <div className="flex items-center">
            <input
              id="isSelfEmployed"
              name="isSelfEmployed"
              type="checkbox"
              checked={filters.isSelfEmployed}
              onChange={handleFilterChange}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="isSelfEmployed" className="ml-2 block text-sm text-gray-900">
              Self-Employed
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="isBusinessRegistered"
              name="isBusinessRegistered"
              type="checkbox"
              checked={filters.isBusinessRegistered}
              onChange={handleFilterChange}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="isBusinessRegistered" className="ml-2 block text-sm text-gray-900">
              A Registered Business Owner
            </label>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBenefits.length > 0 ? (
          filteredBenefits.map(benefit => (
            <Card key={benefit.id} title={benefit.title}>
              <p>{benefit.description}</p>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 md:col-span-2 text-center">No matching benefits found for the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Benefits;
