import { Role } from 'types/AuthDTO/AuthDTO';
import { useAppSelector } from './redux';

export const useCheckAccess = (necessaryRole: Role | Role[]):boolean => {
  const userRole = useAppSelector((state) => state.user.role);

  return Array.isArray(necessaryRole) ? necessaryRole.includes(userRole, 0) : necessaryRole === userRole;
};
