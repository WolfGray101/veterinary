import { Navigate } from 'react-router-dom';
import { useCheckAccess } from '../../hooks/useCheckAccess';

interface IPrivateRouteProps {
  children: JSX.Element,
  necessaryRole: string,
}

const PrivateRoute = ({ children, necessaryRole }: IPrivateRouteProps): JSX.Element => {
  const isAccessAllowed = useCheckAccess(necessaryRole);

  return isAccessAllowed ? children : <Navigate to='/sign-in' replace />;
};

export default PrivateRoute;
