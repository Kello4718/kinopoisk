import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Movie } from '../../types/types';
import { FC } from 'react';

import styles from './MovieItem.module.css';

type MovieItemProps = {
    item: Movie;
};

const MovieItem: FC<MovieItemProps> = ({ item }) => {
    return (
        <Card
            hoverable
            cover={
                <img
                    className={styles.image}
                    alt="example"
                    src={item.poster.previewUrl}
                />
            }
        >
            <Meta title={item.name} description="www.instagram.com" />
        </Card>
    );
};

export default MovieItem;
