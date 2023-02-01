import { Navigate } from 'react-router-dom';
import { useCheckAccess } from '../../hooks/useCheckAccess';

interface IPrivateRouteProps {
  children: JSX.Element,
  necessaryRole: string,
}

const PrivateRoute = ({ children, necessaryRole }: IPrivateRouteProps): JSX.Element => {
  const isAccessDenied = useCheckAccess(necessaryRole);

  return isAccessDenied ? <Navigate to='/sign-in' replace /> : children;
};

export default PrivateRoute;
