import { NavLink, Link } from 'react-router-dom';

import '../styles/header.scss';

function Header(): JSX.Element {
  const plugUserDate = true;

  const item = plugUserDate ? (
    <div className='header-account-info'>
      <Link className='header-link-notifications' to='' />
      <div className='header-account-info__user-date'>
        <span className='header-account-info__user-name'>Gleb</span>
        <span className='header-account-info__user-role'>Admin</span>
      </div>
      <Link className='header-link-user_more' to='' />
      <img className='header-img-user' src='https://static.productionready.io/images/smiley-cyrus.jpg' alt="alt" />
    </div>
  ) : (
    <div className='header-account-info'>
      <Link className='header-mobile_link' to=''>Аккаунт</Link>
      <Link className='header-link-sign-in' to='/sign-in'>Sign In</Link>
      <Link className='header-link-register' to='/sign-up'>Register</Link>
    </div>
  );

  return (
    <header className='header'>
      <Link className='header-mobile_menu' to='' />
      <div className='img-header' />
      <ul className='header-list-link'>
        <li className='header-link'><NavLink className='link' to='/doctor'>Список докторов</NavLink></li>
        <li className='header-link'><NavLink className='link' to=''>Список процедур</NavLink></li>
        <li className='header-link'><NavLink className='link' to=''>Список того</NavLink></li>
        <li className='header-link'><NavLink className='link' to=''>О чем-нубудь</NavLink></li>
        <li className='header-link'><NavLink className='link' to=''>Список сосисок</NavLink></li>
        <li className='header-link'><NavLink className='link' to=''>Контакты</NavLink></li>
        <li className='header-link'><NavLink className='link' to=''>О нас</NavLink></li>
        <li className='header-link'><NavLink className='link' to='/forum'>Форум</NavLink></li>
      </ul>
      {item}
    </header>
  );
}

export default Header;
