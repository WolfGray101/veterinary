import { useGetAllBaseTopicsQuery } from 'services/user/TopicApi';

import TopicWidget from 'widgets/TopicWidget/TopicWidget';

import classes from './ForumPage.module.scss';

function ForumPage(): JSX.Element {
  const { data = [], isLoading, isError } = useGetAllBaseTopicsQuery();

  if (isError) return <div>Что-то пошло не так</div>;

  if (isLoading) return <div>Загрузка...</div>;

  console.log(data);

  return (
    <section className={classes.wrapper}>
      <div className={classes.contentContainer}>
        <header className={classes.headerContainer}>
          <h1 className={classes.pageTitle}>
            Форум
          </h1>
        </header>
        <main className={classes.content}>
          <ul className={classes.content__list} />
        </main>
      </div>
      <div className={classes.pagination}>
        Pagination
      </div>
    </section>
  );
}

export default ForumPage;
