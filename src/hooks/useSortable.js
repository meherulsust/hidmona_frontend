import { useState, useMemo } from 'react';

export const useSortable = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'desc' ? 1 : -1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'desc' ? -1 : 1;
        }

        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const sortRequest = (key) => {
    let direction = 'asc';

    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
  };

  return [sortedItems, sortRequest, sortConfig];
};
