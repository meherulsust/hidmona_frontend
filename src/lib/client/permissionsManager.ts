import { useSession } from 'next-auth/client';

export const projectPermissions = {
  // User
  createUser: 'user:can_create',
  viewUser: 'user:can_view',
  editUser: 'user:can_edit',
  deleteUser: 'user:can_delete',
};

export function usePermission() {
  const [session] = useSession();
  const userPermissions = session?.permissions || [];

  const hasPermission = (name: string) => userPermissions.indexOf(name) !== -1;

  const hasPermissions = (names: string[]): boolean => {
    if (names.length === 1) {
      return hasPermission(names[0]);
    }

    return names.every((name) => userPermissions.indexOf(name) !== -1);
  };

  return { hasPermission, hasPermissions };
}
