import { useAppSelector } from 'hooks/redux';
import { useCheckAccess } from 'hooks/useCheckAccess';
import { NavLink, Link } from 'react-router-dom';
import { Role } from 'types/AuthDTO/AuthDTO';
import RoleWidget from 'widgets/RoleWidget/RoleWidget';
import classes from './Header.module.scss';
import { routsHeaderArray } from './routs';

const HeaderButtons = (): JSX.Element => (
  <>
    <Link className={classes.link_mobile} to="/sign-in">
      Аккаунт
    </Link>
    <Link className={classes.link_signIn} to="/sign-in">
      Sign In
    </Link>
    <Link className={classes.link_register} to="/sign-up">
      Register
    </Link>
  </>
);

function Header(): JSX.Element {
  const role = useAppSelector((state) => state.user.role);

  const listLink = routsHeaderArray.map((el) => (
    <li key={el.label} className={classes.link}>
      <NavLink className={classes.navlink} to={el.path}>
        {el.label}
      </NavLink>
    </li>
  ));

  const controls = useCheckAccess([Role.ADMIN, Role.CLIENT, Role.DOCTOR, Role.MANAGER])
    ? <RoleWidget role={role} /> : <HeaderButtons />;

  return (
    <header className={classes.header}>
      <Link className={classes.menu_mobile} to="" />
      <div className={classes.imgHeader} />
      <ul className={classes.listLink}>{listLink}</ul>
      <div className={classes.accountInfo}>{controls}</div>
    </header>
  );
}

export default Header;
