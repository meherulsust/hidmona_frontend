// import React, { FC } from 'react';
// import { DDSelect, VSButton } from 'common';
// import { range } from 'utils';

// type TProps = {
//   total: number;
//   page: number;
//   size: number;
//   sizes: number[];
//   onPageChange: (page: number, size: number) => void;
//   className?: string;
//   pageClass?: string;
// };

// const VSPagination: FC<TProps> = (props) => {
//   const { total, page, size } = props;

//   const pages = Math.ceil(total / size) || 1;
//   const start = (page - 1) * size + 1;
//   const last = (page - 1) * size + size;
//   const end = last > total ? total : last;

//   const goToPage = (page = 1, size = props.size) => {
//     props.onPageChange(page, size);
//   };

//   const firstPage = (
//     <VSButton
//       size="auto"
//       className={`vs-pagination-number${page === 1 ? ' is-active' : ''}`}
//       action={() => goToPage(1)}
//     >
//       1
//     </VSButton>
//   );
//   const lastPage =
//     page === 1 && page === pages ? null : (
//       <VSButton
//         size="auto"
//         className={`vs-pagination-number${page === pages ? ' is-active' : ''}`}
//         action={() => goToPage(pages)}
//       >
//         {pages}
//       </VSButton>
//     );

//   let middlePagesRange = range(page - 1, page + 1);
//   middlePagesRange = middlePagesRange.filter(
//     (mPage) => mPage > 1 && mPage < pages
//   );

//   const middlePages = middlePagesRange.map((mPage) => (
//     <VSButton
//       size="auto"
//       className={`vs-pagination-number${mPage === page ? ' is-active' : ''}`}
//       key={`page-${mPage}`}
//       action={() => goToPage(mPage)}
//     >
//       {mPage}
//     </VSButton>
//   ));

//   const splitter = <span className="ml-2 mr-4 text-primary">...</span>;
//   const leftSplitter = middlePagesRange[0] > 2 ? splitter : null;
//   const rightSplitter =
//     middlePagesRange[middlePagesRange.length - 1] + 1 < pages ? splitter : null;

//   const onPageSizeSelected = (selected) => {
//     goToPage(1, selected);
//   };

//   return (
//     <div className=" ">
//       <div className="vs-pagination-size-selector mb-4 xl:mb-0">
//         <div className="flex flex-col">
//           <div className="flex">
//             <span className="leading-loose">Show &nbsp;</span>
//             <DDSelect
//               value={props.size}
//               options={props.sizes}
//               allowEmpty={false}
//               placeholder=""
//               className="xl:flex-1 ml-2"
//               onSelect={onPageSizeSelected}
//             />
//           </div>
//           <span className="leading-loose">&nbsp; Items per page</span>
//         </div>
//       </div>
//       <div className="vs-pagination-numbers">
//         <div className="flex text-grey">
//           <VSButton
//             size="auto"
//             className="vs-pagination-number flex items-center"
//             action={() => goToPage(page - 1)}
//             disabled={page === 1}
//           >
//             <i className="icon-key-arrow-left" />
//             <span className="uppercase">Prev</span>
//           </VSButton>
//           {firstPage}
//           {leftSplitter}
//           {middlePages}
//           {rightSplitter}
//           {lastPage}
//           <VSButton
//             size="auto"
//             className="vs-pagination-number flex items-center"
//             action={() => goToPage(page + 1)}
//             disabled={page === pages}
//           >
//             <span className="uppercase">Next</span>
//             <i className="icon-key-arrow-right" />
//           </VSButton>
//         </div>

//         <div className="mt-4 flex">
//           <span>Showing</span>
//           <span className="vs-number-range">
//             {start !== end ? `${start} - ${end}` : start}
//           </span>
//           <span>of</span>
//           <span className="vs-number-range">{props.total}</span>
//           <span>items</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const paginationDefaultProps = {
//   total: 0,
//   page: 1,
//   size: 10,
//   sizes: [5, 10, 20, 50],
//   onPageChange: () => {},
// } as Partial<TProps>;

// VSPagination.defaultProps = paginationDefaultProps;

// export default VSPagination;

import { FC, useState } from 'react';
import clsx from 'clsx';
import { VSButton } from '../Button';

const nullOrUndefined = (val: number) => val === null || val === undefined;
const isNumber = (val: number) =>
  !isNaN(val) && isFinite(val) && typeof val === 'number';

const range = (start: number, end: number) => {
  if (
    nullOrUndefined(start) ||
    !isNumber(start) ||
    nullOrUndefined(end) ||
    !isNumber(end)
  )
    return [];

  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
};

export interface PaginationProps {
  total: number;
  perPage: number;
  onPageChange: (page: number) => void;
  className?: string;
  pageClass?: string;
}

const VSPagination: FC<PaginationProps> = ({
  total,
  perPage,
  onPageChange,
}: PaginationProps) => {
  const [page, setPage] = useState(1);

  const goToPage = (page: number = 1) => {
    setPage(page);
    onPageChange(page);
  };

  const pages = Math.ceil(total / perPage) || 1;

  const firstPage = (
    <VSButton
      className={`vs-pagination-number${page === 1 ? ' is-active' : ''}`}
      onClick={() => goToPage(1)}
    >
      1
    </VSButton>
  );
  const lastPage =
    page === 1 && page === pages ? null : (
      <VSButton
        className={`vs-pagination-number${page === pages ? ' is-active' : ''}`}
        onClick={() => goToPage(pages)}
      >
        {pages}
      </VSButton>
    );

  let middlePagesRange = range(page - 1, page + 1);
  middlePagesRange = middlePagesRange.filter(
    (mPage) => mPage > 1 && mPage < pages
  );

  const middlePages = middlePagesRange.map((mPage) => {
    return (
      <VSButton
        className={`vs-pagination-number${mPage === page ? ' is-active' : ''}`}
        key={`page-${mPage}`}
        onClick={() => goToPage(mPage)}
      >
        {mPage}
      </VSButton>
    );
  });

  const splitter = <span className="ml-2 mr-4 text-primary">...</span>;
  const leftSplitter = middlePagesRange[0] > 2 ? splitter : null;
  const rightSplitter =
    middlePagesRange[middlePagesRange.length - 1] + 1 < pages ? splitter : null;

  return (
    <div className="vs-pagination-container flex-col items-center xl:flex-row xl:justify-items-start">
      <div className="vs-pagination-numbers flex flex-col flex-1 items-end">
        <div className="flex text-grey space-x-2">
          <VSButton
            className={clsx(page === 1 ? 'cursor-not-allowed opacity-60' : '')}
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </VSButton>
          {firstPage}
          {leftSplitter}
          {middlePages}
          {rightSplitter}
          {lastPage}
          <VSButton
            className={clsx(
              page === pages ? 'cursor-not-allowed opacity-60' : ''
            )}
            onClick={() => goToPage(page + 1)}
            disabled={page === pages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </VSButton>
        </div>
      </div>
    </div>
  );
};

VSPagination.displayName = 'VSPagination';
VSPagination.defaultProps = {
  perPage: 1,
  total: 0,
  onPageChange: () => {},
} as Partial<PaginationProps>;

export default VSPagination;
