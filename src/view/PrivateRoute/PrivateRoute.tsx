import { Navigate } from 'react-router-dom';
import { useCheckAccess } from '../../hooks/useCheckAccess';
import { Role } from '../../types/AuthDTO/AuthDTO';

interface IPrivateRouteProps {
  children: JSX.Element,
  necessaryRole: Role | Role[],
}

const PrivateRoute = ({ children, necessaryRole }: IPrivateRouteProps): JSX.Element => {
  const isAccessAllowed = useCheckAccess(necessaryRole);

  return isAccessAllowed ? children : <Navigate to='/sign-in' replace />;
};

export default PrivateRoute;
