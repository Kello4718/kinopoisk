import { Button, List, Pagination, Result, Skeleton } from 'antd';
import MovieItem from '../../components/MovieItem/MovieItem';

import styles from './Home.module.css';
import {
    useGetMoviesDataQuery,
    useLazyGetMoviesDataQuery,
} from '../../api/moviesApi';
import { updatePage } from '../../features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const MAX_MOVIES = 500;

const Home = () => {
    const { page } = useAppSelector((state) => state.movies);
    const {
        data: movies,
        isLoading,
        isError,
        refetch,
        status,
    } = useGetMoviesDataQuery({ page }, {});

    console.log(status);
    const [getMovies] = useLazyGetMoviesDataQuery({});
    const dispatch = useAppDispatch();
    return (
        <>
            {!isError ? (
                <Skeleton loading={isLoading} active>
                    <List
                        className={styles.list}
                        grid={{ column: 4, gutter: [20, 20] }}
                        dataSource={movies}
                    >
                        {movies?.map((item) => (
                            <List.Item key={item.id}>
                                <MovieItem item={item} />
                            </List.Item>
                        ))}
                    </List>
                    <Pagination
                        defaultCurrent={1}
                        total={MAX_MOVIES}
                        onChange={(page) => {
                            dispatch(updatePage(page));
                            getMovies({ page });
                        }}
                    />
                </Skeleton>
            ) : (
                <Result
                    status="error"
                    title="Ошибка"
                    subTitle="Давайте попробуем получить данные еще раз! 😊"
                    extra={[
                        <Button
                            key="reload"
                            onClick={() => {
                                refetch();
                            }}
                        >
                            Загрузить данные
                        </Button>,
                    ]}
                />
            )}
        </>
    );
};

export default Home;
