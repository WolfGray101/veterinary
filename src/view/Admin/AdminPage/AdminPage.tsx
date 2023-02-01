import classes from './AdminPage.module.scss';

import Input from '../../../shared/Input/Input';
import useInput from '../../../hooks/useInput';

function AdminPage() {
  const searchInput = useInput('');

  return (
    <div className={classes.adminPageContainer}>
      <aside>
        <div />
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

export default AdminPage;
