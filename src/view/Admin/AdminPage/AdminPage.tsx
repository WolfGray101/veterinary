import { Link } from 'react-router-dom';

import classes from './AdminPage.module.scss';

import Input from '../../../shared/Input/Input';
import useInput from '../../../hooks/useInput';
import routs from './routs';

function Routs() {
  const searchInput = useInput('');

  const navigations = routs.map((element) => (
    <li key={element} className={classes.navAdmin__item}>
      <Link className={classes.navAdmin__link} to={element}>{element}</Link>
    </li>
  ));

  return (
    <div className={classes.adminPageContainer}>
      <aside className={classes.aside}>
        <div className={classes.aside__dashboard}>
          <div />
        </div>
        <nav className={classes.navAdmin}>
          <ul className={classes.navAdmin__list}>
            {navigations}
          </ul>
        </nav>
      </aside>
      <div className={classes.adminMain}>
        <div className={classes.adminMain__search}>
          <Input icon {...searchInput} />
        </div>
        <header className={classes.adminMain__header}>
          <h1 className={classes.adminMain__title}>
            Admin
          </h1>
        </header>
        <section />
      </div>
    </div>
  );
}

export default Routs;
