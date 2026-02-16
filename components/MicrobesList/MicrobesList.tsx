'use client';

// * React
import { memo, useState } from 'react';

// * Data
import { MICROBES, type Microbe } from './MicrobesList.data';
import { filterOptions, sortOptions } from './MicrobesList.options.data';

type FilterType = 'all' | 'bacteria' | 'fungi';
type SortType = 'none' | 'ascending' | 'descending';

const MicrobesList = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('none');

  // Filter
  const filteredMicrobes =
    filter === 'all'
      ? MICROBES
      : MICROBES.filter((microbe) => microbe.type === filter);

  // Sort
  const processedMicrobes = [...filteredMicrobes].sort((a, b) => {
    if (sort === 'ascending') {
      return a.abundance - b.abundance;
    }

    if (sort === 'descending') {
      return b.abundance - a.abundance;
    }

    return 0;
  });

  return (
    <div className="flex flex-col gap-9">
      <div className="flex justify-center gap-11">
        {/* Select */}
        <div className="select-block">
          <label htmlFor="filter" className="select-label">
            Filter by type:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as FilterType)}
            className="select"
          >
            {filterOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="select-block">
          <label htmlFor="sort" className="select-label">
            Sort by abundance:
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortType)}
            className="select"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* List */}
      <ul className="flex flex-col gap-2.5">
        {processedMicrobes.map((microbe) => (
          <Item key={microbe.id} microbe={microbe} />
        ))}
      </ul>
    </div>
  );
};

type ItemProps = {
  microbe: Microbe;
};

const Item = memo(({ microbe }: ItemProps) => {
  return (
    <li className="p-4 border border-primary bg-light rounded-xl flex justify-between items-center">
      <div>
        <div className="font-semibold">{microbe.name}</div>
        <p className="text-sm text-text">
          Type: {microbe.type} | Role: {microbe.role}
        </p>
      </div>
      <span className="font-medium">{microbe.abundance}%</span>
    </li>
  );
});

Item.displayName = 'Item';

export default MicrobesList;
