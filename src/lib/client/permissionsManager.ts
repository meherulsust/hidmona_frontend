import { useSession } from 'next-auth/client';

export const projectPermissions = {
  // User
  user: {
    createUser: 'user:can_create',
    viewUser: 'user:can_view',
    editUser: 'user:can_edit',
    deleteUser: 'user:can_delete',
  },
  // organization
  organization: {
    viewOrganization: 'organization:can_view',
    editOrganization: 'organization:can_edit',
  },
};

export function useShowPermission(data="") {
  const [session] = useSession();
  const userPermission = session?.user?.permissions || [];
  const result = userPermission.includes(data);
  return result;
}

export function usePermission() {
  // const [session] = useSession();
  // const userPermissions = session?.user?.permissions || [];
  // const hasPermission = (name: string) => userPermissions.indexOf(name) !== -1;
  // const hasPermissions = (names: string[]): boolean => {
  //   if (names.length === 1) {
  //     return hasPermission(names[0]);
  //   }
  //   return names.every((name) => userPermissions.indexOf(name) !== -1);
  // };
  // return { hasPermission, hasPermissions };
}
