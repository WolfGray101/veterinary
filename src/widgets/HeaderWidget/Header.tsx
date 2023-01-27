import { NavLink, Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { routsHeaderArray } from './routs';

function Header(): JSX.Element {
  const listLink = routsHeaderArray.map((el) => (
    <li key={el.label} className={classes.link}>
      <NavLink className={classes.navlink} to={el.path}>
        {el.label}
      </NavLink>
    </li>
  ));

  return (
    <header className={classes.header}>
      <Link className={classes.menu_mobile} to="" />
      <div className={classes.imgHeader} />
      <ul className={classes.listLink}>{listLink}</ul>
      {/* buttons || RoleWidget */}
      <div className={classes.accountInfo}>
        <Link className={classes.link_mobile} to="">
          Аккаунт
        </Link>
        <Link className={classes.link_signIn} to="">
          Sign In
        </Link>
        <Link className={classes.link_register} to="">
          Register
        </Link>
      </div>
    </header>
  );
}

export default Header;
