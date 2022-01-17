import { FC } from 'react';

import { VSPagination } from 'common';
// import { useSortable } from 'hooks/useSortable';
import { isEmpty } from '@@utils/isEmpty';

type TProps = {
  size?: number;
  sizes?: number[];
  total?: number;
  page?: number;
  thClassName?: string;
  trClassName?: string;
  head: object;
  data: object | object[];
  actions?: (value) => HTMLTableDataCellElement;
  onPageChange?: () => {};
};

const VSTable: FC<TProps> = ({
  head,
  data,
  onPageChange,
  page,
  size,
  sizes,
  total,
  thClassName,
  trClassName,
  actions,
}) => {
  // const [sortedItems] = useSortable(data);

  // const getSortClassName = (key) => {
  //   return sortConfig?.key === key && sortConfig.direction === 'asc'
  //     ? `icon-key-arrow-down`
  //     : `icon-key-arrow-up`;
  // };

  const renderHead = () => {
    const classNames = `${thClassName} border`;

    return (
      <tr>
        {Object.keys(head).map((key, index) => (
          <th
            key={index}
            // onClick={() => sortRequest(key)}
            className={classNames}
          >
            <div className="flex justify-between items-center">
              {head[key]}

              {/* <span className={`${getSortClassName(key)} font-bold`} /> */}
            </div>
          </th>
        ))}
        {actions ? <th className={classNames}>Actions</th> : null}
      </tr>
    );
  };

  const renderData = () => {
    let classNames = `${trClassName} border`;

    return Object.values(data).map((row, index) => (
      <tr key={index}>
        {Object.keys(head).map((key, keyIndex) => (
          <td key={keyIndex} data-label={head[key]} className={classNames}>
            {row[key]}
          </td>
        ))}
        {actions ? (
          <td data-label="Actions" className={classNames}>
            {actions(row)}
          </td>
        ) : null}
      </tr>
    ));
  };

  const pagination = !isEmpty(data) ? (
    <VSPagination
      total={total}
      page={page}
      size={size}
      sizes={sizes}
      onPageChange={onPageChange}
    />
  ) : null;

  return (
    <>
      <div className="table-sub-header my-3">
        <input
          type="text"
          name="search"
          className="border p-1"
          placeholder="Search"
        />
      </div>
      <table className="dd-table w-full table-auto">
        <thead>{renderHead()}</thead>
        <tbody>{renderData()}</tbody>
      </table>
      <div className="mt-5">{pagination}</div>
    </>
  );
};

const tableDefaultProps = {
  page: 1,
  size: 10,
  sizes: [10, 20, 30],
  thClassName: 'text-left p-4',
  trClassName: 'text-left p-4',
} as Partial<TProps>;

VSTable.defaultProps = tableDefaultProps;

export default VSTable;
