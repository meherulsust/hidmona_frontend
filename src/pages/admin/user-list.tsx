import { useApiClient } from 'components/ApiClientProvider';
import { DEFAULT_PAGE_SIZE } from 'config';
import UserListData from 'features/admin/user_list/UserList';
import { NextPageComponent } from 'next';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const UserList: NextPageComponent = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);

  const apiClient = useApiClient();

  const filterParams = {
    offset: currentOffset,
    limit: DEFAULT_PAGE_SIZE,
  };

  const {
    isLoading,
    isError,
    data: dalaList,
  } = useQuery(
    ['getUserList', filterParams],
    () => apiClient.getUserList(filterParams),
    {
      onError: (err: any) => {
        console.log('err ', err);
      },
    }
  );

  const handleNewEntry = () => {
    setIsShowModal(true);
  };

  const handlePageChange = (page: number) => {
    const offset = DEFAULT_PAGE_SIZE * page - DEFAULT_PAGE_SIZE;

    setCurrentOffset(offset);
  };

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <div className="flex justify-between p-2 mb-4 rounded-md">
        <h1 className="mt-2 text-xl capitalize">User List</h1>
      </div>

      <UserListData
        data={dalaList}
        closeModal={closeModal}
        openModal={openModal}
        isLoading={isLoading}
        isError={isError}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

UserList.pageOptions = {
  requiresAuth: true,
};

export default UserList;
