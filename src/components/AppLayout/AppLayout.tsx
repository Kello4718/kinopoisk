import { Navigate, Outlet } from 'react-router-dom';

import { Flex } from 'antd';
import { useAppSelector } from '../../app/hooks';
import Header from '../Header/Header';

import styles from './AppLayout.module.css';

const AppLayout = () => {
    const { user } = useAppSelector(({ movies }) => movies);

    if (!user.login && !user.password) {
        return <Navigate to={'/auth'} />;
    }

    return (
        <Flex vertical gap={20} className={styles.container}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </Flex>
    );
};

export default AppLayout;
