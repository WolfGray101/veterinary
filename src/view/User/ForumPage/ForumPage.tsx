import { Spin, Alert } from 'antd';

import TopicWidget from 'widgets/TopicWidget/TopicWidget';

import { useGetAllBaseTopicsQuery } from 'services/user/TopicApi';

import classes from './ForumPage.module.scss';

function ForumPage(): JSX.Element {
  const { data = [], isLoading, isError } = useGetAllBaseTopicsQuery();

  const errorMessage = isError
    ? (
      <Alert
        message="Упс, что-то пошло не так"
        description="Попробуйте позже"
        type="error"
        showIcon
        closable
      />
    ) : null;

  const loading = isLoading
    ? (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Spin size="large" />
      </div>
    ) : null;

  const topics = data.map((el) => (
    <li key={el.id}>
      <TopicWidget {...el} />
    </li>));

  return (
    <section className={classes.wrapper}>
      <div className={classes.contentContainer}>
        <header className={classes.headerContainer}>
          <h1 className={classes.pageTitle}>
            Форум
          </h1>
        </header>
        <main className={classes.content}>
          {errorMessage}
          {loading}
          <ul className={classes.content__list}>
            {topics}
          </ul>
        </main>
      </div>
      <div className={classes.pagination}>
        Pagination
      </div>
    </section>
  );
}

export default ForumPage;
