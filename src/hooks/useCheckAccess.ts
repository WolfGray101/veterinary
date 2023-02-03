import { useAppSelector } from './redux';

export const useCheckAccess = (necessaryRole: string):boolean => {
  const userRole = useAppSelector((state) => state.user.role);

  return necessaryRole === userRole;
};
