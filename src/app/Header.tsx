import { NavLink, Link } from 'react-router-dom';
import classes from '../styles/header.module.scss';

function Header(): JSX.Element {
  const plugUserDate = false;

  const item = plugUserDate ? (
    <div className={classes.accountInfo}>
      <Link className={classes.linkNotifications} to='' />
      <div className={classes.accountInfo_userDate}>
        <span className={classes.accountInfo_userName}>Gleb</span>
        <span className={classes.accountInfo_userRole}>Admin</span>
      </div>
      <Link className={classes.link_userMore} to='' />
      <img className={classes.imgUser} src='https://static.productionready.io/images/smiley-cyrus.jpg' alt="alt" />
    </div>
  ) : (
    <div className={classes.accountInfo}>
      <Link className={classes.link_mobile} to=''>Аккаунт</Link>
      <Link className={classes.link_signIn} to=''>Sign In</Link>
      <Link className={classes.link_register} to=''>Register</Link>
    </div>
  );

  return (
    <header className={classes.header}>
      <Link className={classes.menu_mobile} to='' />
      <div className={classes.imgHeader} />
      <ul className={classes.listLink}>
        <li className={classes.link}><NavLink className={classes.navlink} to=''>Список докторов</NavLink></li>
        <li className={classes.link}><NavLink className={classes.navlink} to=''>Список процедур</NavLink></li>
        <li className={classes.link}><NavLink className={classes.navlink} to=''>Список того</NavLink></li>
        <li className={classes.link}><NavLink className={classes.navlink} to=''>О чем-нубудь</NavLink></li>
        <li className={classes.link}><NavLink className={classes.navlink} to=''>Список сосисок</NavLink></li>
        <li className={classes.link}><NavLink className={classes.navlink} to=''>Контакты</NavLink></li>
        <li className={classes.link}><NavLink className={classes.navlink} to=''>О нас</NavLink></li>
        <li className={classes.link}><NavLink className={classes.navlink} to=''>Форум</NavLink></li>
      </ul>
      {item}
    </header>
  );
}

export default Header;
