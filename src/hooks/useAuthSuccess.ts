import { useNavigate } from 'react-router-dom';
import { pushAuth } from 'features/userSlice/userSlice';
import { IAuthResponse } from 'types/AuthDTO/AuthDTO';
import { useAppDispatch } from './redux';

export const useAuthSuccess = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dispatchAuth = (payload: IAuthResponse) => dispatch(pushAuth(payload));
  const redirect = ({ role }:IAuthResponse) => {
    const path = role.toLocaleLowerCase();
    navigate(`/${path}`);
  };

  return {
    dispatchAuth,
    redirect
  };
};
