import { Spin, Alert } from 'antd';
import { CustomPagination } from 'shared';

import { useGetAllBaseTopicsQuery } from 'services/user/TopicApi';
import { useEffect, useState } from 'react';

import TopicWidget from 'widgets/TopicWidget/TopicWidget';

import classes from './ForumPage.module.scss';

function ForumPage(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>((page - 1) * 10);

  const { data = [], isLoading, isError, isSuccess } = useGetAllBaseTopicsQuery();

  useEffect(() => {
    setOffset(() => (page - 1) * 10);

    // При переключении страницы пагинации, срабатывает плавный скролл к верху страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

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

  const topics = data.map((el, index) => (index > offset - 1 && index < (offset + 10) ? (
    <li key={el.id}>
      <TopicWidget {...el} />
    </li>)
    : null));

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
        { isSuccess && <CustomPagination
          currentPage={page}
          totalItems={data.length}
          itemsOnPage={10}
          setPage={(page) => setPage(() => page)}
        />}
      </div>
    </section>
  );
}

export default ForumPage;
