import { VSPagination } from '@common/Pagination';
import { useApiClient } from 'components/ApiClientProvider';
import ErrorMessage from 'components/ErrorMessage';
import Spinner from 'components/Spinner';
import { DEFAULT_PAGE_SIZE } from 'config';
import React from 'react';
import { useQueryClient } from 'react-query';

interface dataINT {
  data: UserResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  closeModal: Function;
  openModal: Function;
  handlePageChange: (value: number) => void;
}

const UserList = ({
  data,
  openModal,
  handlePageChange,
  isLoading,
  isError,
}: dataINT) => {
  const queryClient = useQueryClient();
  const apiClient = useApiClient();
  const handleEdit = (data: any) => {
    openModal();
  };

  return (
    <>
      <div className="w-full pb-4 overflow-x-auto bg-white">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead className="w-full bg-white">
            <tr>
              <th className="p-2 text-black bg-gray-300 border">Name</th>
              <th className="p-2 text-black bg-gray-300 border">Username</th>
              <th className="p-2 text-black bg-gray-300 border">Phone</th>
              <th className="p-2 text-black bg-gray-300 border">Email</th>
            </tr>
          </thead>
          <tbody className="w-full bg-white divide-y divide-gray-400">
            {isLoading ? (
              <tr>
                <td colSpan={6}>
                  <div className="py-4">
                    <Spinner className="mx-auto text-primary" />
                  </div>
                </td>
              </tr>
            ) : isError ? (
              <tr>
                <td colSpan={6}>
                  <ErrorMessage
                    message="Failed to load User data"
                    className="py-4 text-center"
                  />
                </td>
              </tr>
            ) : data ? (
              data.items?.map((item: any) => (
                <tr key={item.id}>
                  <th className="p-2 text-center border">{item?.full_name}</th>
                  <td className="p-2 text-center border"> {item?.username}</td>
                  <td className="p-2 text-center border">{item?.phone}</td>
                  <td className="p-2 text-center border">
                    <i className="mr-4 fas fa-arrow-up text-emerald-500"></i>
                    {item?.email}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-2 text-center border">
                  <ErrorMessage
                    message="No data found"
                    className="py-4 text-center"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {data && data?.items.length > 0 && (
          <div className="pt-4 mt-4 border-t">
            <VSPagination
              total={data?.total || 0}
              onPageChange={handlePageChange}
              perPage={DEFAULT_PAGE_SIZE}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default UserList;
